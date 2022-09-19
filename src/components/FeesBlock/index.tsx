import { FC } from 'react';

import styles from './FeesBlock.module.scss';

interface FeesBlockProps {
  networkFee: string;
  c14Fee: string;
  totalFee: string;
}

export const FeesBlock: FC<FeesBlockProps> = ({ totalFee, networkFee, c14Fee }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.feesTitle}>Fees</h2>
      <div className={styles.block}>
        <div className={styles.feeItem}>
          <span>Network Fee</span>
          <b>{networkFee}$</b>
        </div>
        <h3>+</h3>
        <div className={styles.feeItem}>
          <span>C14 Fee</span>
          <b>{c14Fee}$</b>
        </div>
        <h3>=</h3>
        <div className={styles.feeItem}>
          <span>Total Fee</span>
          <b>{totalFee}$</b>
        </div>
      </div>
    </div>
  );
};
