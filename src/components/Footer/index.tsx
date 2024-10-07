import React, { FC, memo } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = memo(function Footer() {
  return (
    <footer>
      <div className={styles.container}>FOOTER!!!!!!!!!!</div>
    </footer>
  );
});

export default Footer;
