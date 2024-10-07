import React, { FC, memo } from 'react';
import List from '../List';
import { Data } from '../../types/Data';
import styles from './PaginationList.module.scss';

interface PaginationListT {
  data: Data[];
  onNext: () => void;
  onPrev: () => void;
  onDelete: (k: number) => void;
}

const PaginationList: FC<PaginationListT> = memo(function PaginationList({
  data,
  onNext,
  onPrev,
  onDelete,
}: PaginationListT) {
  return (
    <div className={styles.container}>
      <List data={data} onDelete={onDelete} />

      <div className={styles.pagination}>
        <div className={styles.button} onClick={onPrev}>
          ⬅️ previous page
        </div>
        <div className={styles.button} onClick={onNext}>
          next page ➡️
        </div>
      </div>
    </div>
  );
});

export default PaginationList;
