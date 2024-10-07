import React, { FC, memo } from 'react';
import styles from './Menu.module.scss';

const Menu: FC = memo(function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.text}>Main menu UI block</div>
      </div>

      <div
        className={styles.logoutButton}
        onClick={() => console.log('Logout')}
      >
        Log out
      </div>
    </div>
  );
});

export default Menu;
