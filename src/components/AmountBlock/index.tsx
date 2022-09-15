import styles from './AmountBlock.module.scss';
import React, { FC } from 'react';

import svg from '../../assets/img/usd.png';

interface AmountBlockProps {
  subtitle: string;
  currencyName: string;
  currencyIcon: string;
  value: number;
  onChangeValue?: (val: number) => void;
}

export const AmountBlock: FC<AmountBlockProps> = ({
  onChangeValue,
  value,
  currencyIcon,
  currencyName,
  subtitle,
}) => {
  return (
    <div className={styles.root}>
      <p>{subtitle}</p>
      <div className={styles.bottom}>
        <input value={value} type="text" className={styles.input} />
        <div className={styles.info}>
          <h5>{currencyName}</h5>
          <img src={`../../assets/img/${currencyIcon}.png`} alt="USD" />
        </div>
      </div>
      <button className="btn">Buy now</button>
    </div>
  );
};
