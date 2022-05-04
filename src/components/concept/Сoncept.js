import React from "react";
import "./style.scss";

const Сoncept = () => {
  return (
    <section className="сoncept" id="сoncept">
      <div className="container">
        <h2 className="title">Мы работаем в комплексе</h2>
        <p className="subtitle">чтобы Вы не тратили время на поиск и организацию <br />множества подрядчиков</p>
      </div>
      <div className="wrapper">
        <div className="inner"></div>
        <div className="inner">
          <h3 className="step"><span>шаг №1.</span> Подготовительные работы</h3>
          <p className="text">Мы осматриваем здание, делаем замеры и проверяем наличие визуально заметных дефектов: трещин, коррозии, повреждения фундамента и т.д.</p>
          <div className="comment">
            <div className="comment-img"></div>
            <p className="comment-text">“Задача этого этапа получить максимально полное представление о конструкции здания, условиях его эксплуатации и возможных слабых местах“ 
            <span>АЛЕКСЕЙ, обследователь и главный инженер проектов</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Сoncept;