import { FC } from 'react';

import styles from './FeesBlock.module.scss';

interface FeesBlockProps {
  networkFee: string;
  c14Fee: string;
  totalFee: string;
}

export const FeesBlock: FC<FeesBlockProps> = ({ totalFee, networkFee, c14Fee }) => {
  return <div className={styles.root}></div>;
};
