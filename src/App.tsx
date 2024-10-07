import React from 'react';
import Home from '../src/pages/Home';
import styles from './App.module.scss';

function App() {
  console.log('render App');
  return (
    <div className={styles.global}>
      <Home />
    </div>
  );
}

export default App;
