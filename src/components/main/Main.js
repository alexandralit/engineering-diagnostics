import React, { useEffect, useRef } from "react";
import "./style.scss";
import Header from './../header/Header';
import one from "./../../assets/img/01.svg";
import two from "./../../assets/img/02.svg";
import three from "./../../assets/img/03.svg";

const Main = () => {
  const text = useRef(null);

  useEffect(() => {
    const arr = text.current.innerText.split("").map((letter, i) =>
      i === 0 || i === 48 ? `<span style="transform:rotate(${i * 3.75}deg") class="dot">${letter}</span>` : `<span style="transform:rotate(${i * 3.75}deg")>${letter}</span>`
    )
    .join("");
    text.current.innerHTML = arr;
  });

  return (
    <div className="wrap" id="main">
      <Header />
      <section className="main container">
        <div className="wrapper">
          <h1 className="title">
            Независимое обследование зданий и сооружений
            <span>антенн, труб, теплосетей, канализаций и других объектов строительства</span>
          </h1>
          <div className="inner">
          <button className="btn" type="button"><span></span>Получить коммерческое</button>
          <p className="text">Отправьте техзадание и получите коммерческое предложение в течении 15 минут на свой email или в мессенджер</p>
          </div>
        </div>
        <div className="wrapper">
          <ul className="list">
            <li className="list-item">
              <img src={one} alt="один" />
              Начинаем работать <br />без аванса
            </li>
            <li className="list-item">
              <img src={two} alt="два" />
              Предоставляем <br />отсрочку платежа
            </li>
            <li className="list-item">
              <img src={three} alt="три" />
              Всегда называем <br />справедливую цену
            </li>
          </ul>
          <div className="video">
            <p className="circle" ref={text}>&bull; Смотрите 2-минутное видео &bull; Смотрите 2-минутное видео</p>
            <div className="btn-play"></div>
          </div>
        </div>
        <div className="line"></div>
      </section>
    </div>
  );
}

export default Main;