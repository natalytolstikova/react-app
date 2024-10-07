import React, { FC } from 'react';
import { Data } from '../../types/Data';
import styles from './List.module.scss';

interface ListT {
  data: Data[];
}

const List: FC<ListT> = ({ data }) => {
  const listItems = data?.map((item, k) => {
    return (
      <li className={styles.listItem} key={k}>
        <div className={styles.points}>{item?.points}</div>

        <div className={styles.dateNameContainer}>
          <div className={styles.subjectContainer}>
            <div className={styles.subject}>{item?.author}</div>
            <div className={styles.subject}>{item?.title}</div>
          </div>
          <div className={styles.date}>{item?.created_at}</div>
        </div>
      </li>
    );
  });

  return <div>{listItems}</div>;
};

export default List;
