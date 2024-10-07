import React, { FC, useState } from 'react';
import { Data } from '../../types/Data';
import styles from './List.module.scss';

interface ListT {
  data: Data[];
}

const List: FC<ListT> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [openedId, setOpenedId] = useState(0);

  const toggleCard = (k: number) => {
    setOpen(!open);
    setOpenedId(k);
  };

  console.log('open');
  console.log(open);

  const listItems = data?.map((item, k) => {
    return (
      <li
        className={
          openedId == k && open ? styles.openedListItem : styles.listItem
        }
        onClick={() => toggleCard(k)}
        key={k}
      >
        <div className={styles.points}>{item?.points}</div>

        <div className={styles.dateNameContainer}>
          <div className={styles.subjectContainer}>
            <div className={styles.subjectWrapper}>
              <div className={styles.subject}>{item?.author}</div>
            </div>

            <div className={styles.subjectWrapper}>
              <div className={styles.subject}>{item?.title}</div>
            </div>
          </div>
          <div className={styles.date}>{item?.created_at}</div>
        </div>
      </li>
    );
  });

  return <div>{listItems}</div>;
};

export default List;
