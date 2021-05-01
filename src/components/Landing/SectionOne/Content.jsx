import React from "react";
import s from "./Content.module.css";
import Picture from "./Pictures/Picture.svg";

const ContentOne = () => {
  return (
    <container className={s.structure}>
      <container className={s.LeftSide}>
        <div>
          <p className={s.H1}>Cake</p>
          <p className={s.H2}>Инвестировать в акции </p>
          <p className={s.H2}>мировых компаний стало легче</p>
        </div>
        <container>
          <button className={s.button}>Начать инвестировать</button>
        </container>
      </container>
      <div className={s.Picture}>
        <img src={Picture} alt="My App" />
      </div>
    </container>
  );
};

export default ContentOne;
