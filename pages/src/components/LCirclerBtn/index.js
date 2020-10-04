export default function LCircleBtn({ img, onClick }) {
  let a = '/facebook.png';
  return (
    <button className="btn">
      <img className="icon" src={img}></img>
      <style jsx>{`
        .btn {
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          border-radius: 50px;
          background: #9033ff;
          box-shadow: 0 9px 30px #797979;
        }
        .icon {
          width: 30px;
          height: 30px;
        }
      `}</style>
    </button>
  );
}
