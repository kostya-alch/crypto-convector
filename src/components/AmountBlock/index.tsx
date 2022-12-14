import styles from './AmountBlock.module.scss';
import React, { FC } from 'react';

interface AmountBlockProps {
  subtitle: string;
  currencyName: string;
  currencyIcon: string;
  value: number;
  onChangeValue: (value: number) => void;
}

export const AmountBlock: FC<AmountBlockProps> = ({
  onChangeValue,
  value,
  currencyIcon,
  currencyName,
  subtitle,
}) => {
  console.log(currencyIcon);
  return (
    <div className={styles.root}>
      <p>{subtitle}</p>
      <div className={styles.bottom}>
        <input
          onChange={(event) => onChangeValue(Number(event.target.value))}
          value={value}
          type="text"
          className={styles.input}
        />
        <div className={styles.info}>
          <h5>{currencyName}</h5>
          <img src={`./assets/${currencyIcon}.svg`} alt="value" />
        </div>
      </div>
    </div>
  );
};
