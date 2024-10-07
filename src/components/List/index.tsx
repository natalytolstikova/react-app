import React, { FC, useState } from 'react';
import { Data } from '../../types/Data';
import styles from './List.module.scss';

interface ListT {
  data: Data[];
  onDelete: (k: number) => void;
}

const List: FC<ListT> = ({ data, onDelete }) => {
  const [open, setOpen] = useState(false);
  const [openedId, setOpenedId] = useState(0);

  const toggleCard = (k: number) => {
    setOpen(!open);
    setOpenedId(k);
  };

  const deleteItem = (k: number) => {
    onDelete(k);
  };

  const listItems = data?.map((item, k) => {
    return (
      <li
        className={
          openedId == k && open ? styles.openedListItem : styles.listItem
        }
        onClick={() => toggleCard(k)}
        key={k}
      >
        <div className={styles.row}>
          <div className={styles.points}>{item?.points}</div>

          <div className={styles.column}>
            <div className={styles.dateNameContainer}>
              <div className={styles.subjectContainer}>
                <div className={styles.subject}>{item?.author}</div>

                <div className={styles.subjectWrapper}>
                  <div className={styles.subject}>{item?.title}</div>
                </div>
              </div>
              <div className={styles.date}>{item?.created_at}</div>
            </div>

            {openedId == k && open && (
              <div className={styles.buttonsContainer}>
                <div className={styles.column1}>
                  <div
                    onClick={() => deleteItem(k)}
                    className={styles.deleteButton}
                  >
                    Delete
                  </div>
                  <div className={styles.deleteButton}>Delete</div>
                </div>

                <div className={styles.column2}>
                  <div
                    className={styles.deleteButton}
                    onClick={() => deleteItem(k)}
                  >
                    Delete
                  </div>

                  <div
                    className={styles.deleteButton}
                    onClick={() => deleteItem(k)}
                  >
                    Delete
                  </div>
                  <div
                    className={styles.deleteButton}
                    onClick={() => deleteItem(k)}
                  >
                    Delete
                  </div>
                </div>

                <div className={styles.column3}>
                  <div
                    className={styles.deleteButton}
                    onClick={() => deleteItem(k)}
                  >
                    Delete
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </li>
    );
  });

  return <div>{listItems}</div>;
};

export default List;
