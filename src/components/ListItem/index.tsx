import React, { FC } from 'react';
import styles from './ListItem.module.scss';

const ListItem: FC = () => {
  return (
    <div className={styles.container}>
      <div>item info</div>
    </div>
  );
};

export default ListItem;
