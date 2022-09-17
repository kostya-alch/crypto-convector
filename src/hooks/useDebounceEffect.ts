import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { QuoteResponse } from '../App';

const TARGET_ASSET_ID = 'b2384bf2-b14d-4916-aa97-85633ef05742';

type Props = {
  delay: number;
};

type ReturnProps = {
  youPayValue: number;
  youReceiveValue: number;
  onChangePayValue: (val: number) => void;
  onChangeReceiveValue: (val: number) => void;
};

export const useDebounceEffect = ({ delay }: Props): ReturnProps => {
  const isSourceRef = useRef<boolean>(true);
  const [youPayValue, setYouPayValue] = useState<number>(0);
  const [youReceiveValue, setYouReceiveValue] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout>();

  const onChangePayValue = useCallback((value: number) => {
    isSourceRef.current = true;
    setYouPayValue(value);
  }, []);

  const onChangeReceiveValue = useCallback((value: number) => {
    isSourceRef.current = false;
    setYouReceiveValue(value);
  }, []);

  useEffect(() => {
    clearInterval(timerRef.current);

    timerRef.current = setTimeout(async () => {
      if (isSourceRef.current) {
        try {
          const { data } = await axios.post<QuoteResponse>(
            `https://api-qjoa5a5qtq-uc.a.run.app/quotes`,
            {
              source_currency: 'USD',
              target_crypto_asset_id: TARGET_ASSET_ID,
              [isSourceRef.current ? 'source_amount' : 'target_amount']: String(
                isSourceRef.current ? youPayValue : youReceiveValue,
              ),
            },
          );
          if (isSourceRef.current) {
            setYouReceiveValue(Number(data.target_amount));
          } else {
            setYouPayValue(Number(data.source_amount));
          }
        } catch (e) {
          console.log(e);
        }
      }
    }, delay);

    return () => clearInterval(timerRef.current);
  }, [delay, youPayValue, youReceiveValue]);

  return {
    youPayValue,
    youReceiveValue,
    onChangePayValue,
    onChangeReceiveValue,
  };
};
