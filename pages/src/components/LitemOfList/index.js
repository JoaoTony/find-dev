import { HendleLike } from '../../../../constants';

export default function LitemOfList({ backColor, data, onClick }) {
  //let number = String(item).charAt(0);
  //let firstN = Number(number);
  // const dd = {
  //   name: 'fff',
  //   specialization: 'ddd',
  //   loke: 22,
  // };
  //const { name, specialization, like } = data;

  return (
    <div className="container" onClick={onClick}>
      <div className="subDiv">
        <p className="name">{data.name}</p>
        <p className="specialization">{data.specialization}</p>
      </div>
      <p className="like">{HendleLike(data.like)}</p>

      <style jsx>{`
        .container {
          display: flex;
          flef-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 500px;
          height: 70px;
          background: ${backColor};
          padding: 10px 20px;
          cursor: pointer;
        }
        .subDiv {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .name {
          color: #2c2c2c;
          font-size: 22px;
          margin: 0;
        }
        .specialization {
          color: #aaaaaa;
          font-size: 16px;
          margin: 0;
        }
        .like {
          color: #2c2c2c;
          font-size: 22px;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
