import React, { FC } from 'react';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header>
      <div className={styles.container}>
        <div
          className={styles.headerButton}
          onClick={() => console.log('header button clicked')}
        >
          Header button
        </div>
      </div>
    </header>
  );
};

export default Header;
