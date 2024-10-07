import React, { FC, memo } from 'react';
import styles from './Menu.module.scss';

const Menu: FC = memo(function Menu() {
  return (
    <div>
      <div className={styles.container}>MENU!!!!!!!!!!</div>
    </div>
  );
});

export default Menu;
