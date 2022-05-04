import React from "react";
import "./style.scss";
import tv from "./../../assets/img/tv.png";

const Benefits = () => {
  return (
    <section className="benefits" id="benefits">
      <div className="container">
        <div className="wrapper">
          <h2 className="title">Мы работаем быстро <br />и наши отчеты проходят согласование с первого раза</h2>
          <p className="subtitle">Над вашим объектом работает целая команда: <br />3 ГИПа (главных инженеров проектов) с опытом работы от 6 лет и 2 штатных сотрудника для камеральных работ</p>
        </div>
        <div className="wrapper">
          <h3 className="text">Вы и Ваши архитекторы получаете:</h3>
          <ul className="list">
              <li className="list-item">
                <span className="check"></span>
                Отчет на который на 100% можно положиться 
              </li>
              <li className="list-item">
                <span className="check"></span>
                Экономию времени и прогнозируемость сроков
              </li>
              <li className="list-item">
                <span className="check"></span>
                Предварительные результаты сразу на месте
              </li>
            </ul>
        </div>
        <img className="benefits-img" src={tv} alt="" />
      </div>
    </section>
  );
}

export default Benefits;