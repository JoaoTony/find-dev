import { useState, useEffect } from 'react';
import Head from 'next/head';
import api from '../services/api';

import LButton from './src/components/LButton';
import LitemOfList from './src/components/LitemOfList';
import LCard from './src/components/LCard';

//import data from './src/data';
export default function Home() {
  const [dataCard, setDataCard] = useState([]);
  const [showing, setShowing] = useState({});

  useEffect(() => {
    api.get('devs').then((res) => {
      setDataCard(res.data);
      console.log(res.data);
      setShowing(res.data[0]);
    });
  }, []);

  function HendlePerson(item) {
    console.log(item);
    setShowing(item);
  }

  return (
    <div className="container">
      <Head>
        <title>FindDev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LButton item="Adicionar" />
        <div className="list">
          {dataCard.map((item, index) => (
            <LitemOfList
              backColor={index % 2 === 1 ? '#F8F8F8' : '#D5DEE8'}
              onClick={() => HendlePerson(item)}
              data={item}
            />
          ))}
        </div>
        <LCard data={showing} />
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          background: #fff;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
        }
        .list {
          height: 95vh;
          background: #f4f;
          position: relative;
          overflow: scroll;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
          outline: none;
        }
      `}</style>
    </div>
  );
}
