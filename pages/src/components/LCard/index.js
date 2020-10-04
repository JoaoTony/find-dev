import { HendleLike } from '../../../../constants';
import LCircleBtn from '../LCirclerBtn';

const imgs = [
  '/facebook.png',
  '/instagram.png',
  '/tweeter.png',
  '/google.png',
  '/like.png',
];

export default function LCard({ data }) {
  const baseImagesUrl = 'http://localhost:3333/images';
  return (
    <div className="container">
      <div className="subCont">
        <img
          className="img"
          src={`${baseImagesUrl}/${data.img}`}
          alt="Imagem"
        ></img>
        <p className="name">{data.name}</p>
        <p className="singleText">{data.specialization}</p>
        <p className="singleText">{data.age} anos de idade</p>
        <p className="singleText">{HendleLike(data.like)} curtidas</p>
        <div className="descriptionDiv">
          <p className="description">{data.description}</p>
        </div>
      </div>
      <div className="circlerBtns">
        {imgs.map((item) => (
          <LCircleBtn img={item} />
        ))}
      </div>

      <style jsx>{`
        .container {
          width: 750px;
          height: 95vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          margin: 0 30px;
          padding: 50px 0 0 0;
          background: #d5dee8;
        }
        .subCont {
          width: 70%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        img {
          width: 160px;
          height: 160px;
          border-radius: 100px;
        }
        .name {
          font-size: 25px;
          color: #030303;
          font-weight: bold;
        }
        .singleText {
          font-size: 18px;
          color: #707070;
          margin: 10px 0 0 0;
          width: 80%;
          text-align: center;
        }
        .descriptionDiv {
          height: 250px;
          white-space: normal;
          overflow-y: hidden;
          text-overflow: ellipsis;
          text-align: center;
          width: 80%;
        }
        .description {
          font-size: 18px;
          color: #707070;
          margin: 20px 0 0 0;
          text-align: center;
        }
        .circlerBtns {
          width: 350px;
          align-self: base-line;
          display: falex;
          flex-direction: row;
          justify-content: space-between;
          margin-bottom: 150px;
        }
      `}</style>
    </div>
  );
}
