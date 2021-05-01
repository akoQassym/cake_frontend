import React from "react";
import Left from "./Pictures/SectionFour_Left.png";
import s from './Content.module.css';

const Content = () => {
  return (
    <div>
      <container className={s.structure}>
        <div className={s.Left_Side}>
          <p>Доли акций</p>
          <div className={s.Text}>
            Благодаря нашей функции покупки доли акций, вы сможете инвестировать
            любую сумму денег начиная от $1 и обладать частью всемирных компаний
          </div>
          <container className={s.Button_Con}>
            <button className={s.Button}>Начать инвестировать</button>
          </container>
        </div>
        <div className={s.Right_Side}>
          <img src={Left} className={s.Fractional} alt="Fractional Investing" />
        </div>
      </container>
    </div>
  );
};

export default Content;
