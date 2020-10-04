export default function KButton({ item }) {
  function HendleClick() {
    alert('Apertei');
  }

  return (
    <div>
      <button className="container" onClick={HendleClick}>
        {item}
      </button>
      <style jsx>
        {`
          .container {
            width: 180px;
            height: 50px;
            background: #9033ff;
            color: #fff;
            font-size: 18px;
            border: 0;
            border-radius: 50px;
            position: fixed;
            left: 25px;
            bottom: 25px;
            box-shadow: 0 9px 30px #797979;
          }
        `}
      </style>
    </div>
  );
}
