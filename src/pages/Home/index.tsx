import React, { FC } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import styles from './Home.module.scss';

const Home: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Menu />
      <div className={styles.container}>
        <Header />
        <h1>scene1</h1>
        <h1>scene1</h1>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
