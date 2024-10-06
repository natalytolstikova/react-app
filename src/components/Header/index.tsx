import React, { FC } from 'react';
import styles from './Header.module.scss';
import Button from '../Button';

const Header: FC = () => {
  return (
    <header>
      <div className={styles.container}>
        <Button
          title="Header button"
          onClick={() => console.log('header button clicked')}
        />
      </div>
    </header>
  );
};

export default Header;
