import React, { useState, useEffect, useRef } from "react";
import "./style.scss";

const Services = () => {
  const target = useRef(null);
  const progressbar = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);  

  const scrollListener = () => {
    if (!target.current) {
      return;
    }
    
    const element = target.current;
    const windowScroll = element.scrollLeft;
    const totalWidth = element.scrollWidth - element.clientWidth;
    if (windowScroll === 0) {
      return setScrollProgress(0);
    }
  
    if (windowScroll > totalWidth) {
      return setScrollProgress(100);
    }

    setScrollProgress((windowScroll / totalWidth) * 100);
  }

  const onWheel = e => {
    if (e.deltaY === 0) return;
    e.preventDefault();
    target.current.scrollTo({
      left: target.current.scrollLeft + e.deltaY,
      behavior: "smooth"
    });
    scrollListener();
  };

  useEffect(() => {
    target.current.addEventListener('touchmove', scrollListener);
    progressbar.current.style.width = `${scrollProgress}%`;
    window.addEventListener('scroll', function(e) {
      let coords = target.current.getBoundingClientRect();
      if (coords.top > 0 && coords.top < window.pageYOffset) {
        target.current.addEventListener("wheel", onWheel);
      }
    });
    return () => {
      target.current && target.current.removeEventListener('touchmove', scrollListener);
      target.current && target.current.removeEventListener("wheel", onWheel);
    }
  });

  return (
    <section className="services" id="services">
      <div className="container">
        <p className="subtitle">Услуги</p>
        <h2 className="title">Выполняем как комплексное обследование, так и отдельные виды работ</h2>
      </div>
      <div className="container">
        <ul className="gallary" ref={target} horizontal>
          <li className="gallary-item">
            <div className="img img-1"></div>
            <h3 className="gallary-item_title">Общее обследование</h3>
            <p className="gallary-item_subtitle">Экспертиза отдельных конструкций, обмерные работы, определение прочности, расчет несущей способности и т.д.</p>
            <a className="gallary-item_link" href="#" target="_blank" rel="noreferrer">Подробнее</a>
          </li>
          <li className="gallary-item">
            <div className="img img-2"></div>
            <h3 className="gallary-item_title">Тепловизионная съемка</h3>
            <p className="gallary-item_subtitle">Исследование системы отопления, вентиляции и кондиционирования, а также оценка энергоэффективности здания</p>
            <a className="gallary-item_link" href="#" target="_blank" rel="noreferrer">Подробнее</a>
          </li>
          <li className="gallary-item">
            <div className="img img-3"></div>
            <h3 className="gallary-item_title">Телеинспекция инженерных сетей</h3>
            <p className="gallary-item_subtitle">Цветная телевизионная съемка внутренней поверхности любых протяженных объектов до 250 метров</p>
            <a className="gallary-item_link" href="#" target="_blank" rel="noreferrer">Подробнее</a>
          </li>
          <li className="gallary-item">
            <div className="img img-4"></div>
            <h3 className="gallary-item_title">Тахеометрическая съемка</h3>
            <p className="gallary-item_subtitle">Построение чертежей при помощи лазера, который с точностью до микрона определяет расположение объектов в пространстве.</p>
            <a className="gallary-item_link" href="#" target="_blank" rel="noreferrer">Подробнее</a>
          </li>
          <li className="gallary-item">
            <div className="img img-5"></div>
            <h3 className="gallary-item_title">Диагностика высотных сооружений</h3>
            <p className="gallary-item_subtitle">Оценка состояния антенн и дымовых труб <br />при помощи альпинистов и квадрокоптеров с 30-кратным зумом</p>
            <a className="gallary-item_link" href="#" target="_blank" rel="noreferrer">Подробнее</a>
          </li>
        </ul>
      </div>
      <div className="slider-progressbar">
        <span ref={progressbar}></span>
      </div>
    </section>
  );
}

export default Services;