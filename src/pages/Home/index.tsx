import React, { FC, useEffect, memo, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import styles from './Home.module.scss';
import PaginationList from '../../components/PginationList';

const Home: FC = memo(function Home() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [nPages, setnPages] = useState(0);

  useEffect(() => {
    const fechData = async () => {
      try {
        const res = await fetch(
          `https://hn.algolia.com/api/v1/search?tags=front_page&page=${page}`,
        );

        const datahn = await res.json();
        setData(datahn.hits);
        setnPages(datahn.nbPages);
        console.log(datahn);
      } catch (e) {
        console.error(e);
      }
    };

    fechData();
  }, [page]);

  console.log('render');

  console.log(page);

  const nextPage = () => page < nPages - 1 && setPage(page + 1);
  const prevPage = () => page > 0 && setPage(page - 1);

  return (
    <div className={styles.wrapper}>
      <Menu />
      <div className={styles.container}>
        <Header />
        <PaginationList data={data} onNext={nextPage} onPrev={prevPage} />
        <Footer />
      </div>
    </div>
  );
});

export default Home;
