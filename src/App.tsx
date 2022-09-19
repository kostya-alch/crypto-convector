import { AmountBlock } from './components/AmountBlock';

import './index.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDebounceEffect } from './hooks/useDebounceEffect';
import { FeesBlock } from './components/FeesBlock';

export interface QuoteResponse {
  id: string;
  source_currency: string;
  target_crypto_asset_id: string;
  source_amount: string;
  target_amount: string;
  fiat_blockchain_fee: string;
  absolute_internal_fee: string;
  internal_fee_percent: string;
  total_fee: string;
  expires: Date;
}

function App() {
  const { youPayValue, youReceiveValue, onChangeReceiveValue, onChangePayValue } =
    useDebounceEffect({
      delay: 500,
    });
  return (
    <div className="App">
      <h3 className="app-title">Выберете Вашу валюту</h3>
      <AmountBlock
        onChangeValue={onChangePayValue}
        subtitle={'You Pay'}
        currencyName={'USD'}
        currencyIcon={'usd'}
        value={youPayValue}
      />
      <FeesBlock networkFee={'14'} c14Fee={'13'} totalFee={'13'} />
      <AmountBlock
        subtitle={'You Receive'}
        currencyName={'USDC EVMOS'}
        currencyIcon={'eth'}
        value={youReceiveValue}
        onChangeValue={onChangeReceiveValue}
      />
      <button className="btn">Buy now</button>
    </div>
  );
}

export default App;
