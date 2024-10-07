import React, { FC, memo } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = memo(function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div
          className={styles.helpButton}
          onClick={() => console.log('Help center')}
        >
          Help center
        </div>
      </div>
    </footer>
  );
});

export default Footer;
