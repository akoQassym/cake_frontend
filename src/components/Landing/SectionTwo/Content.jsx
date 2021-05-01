import React from "react";
import s from "./Content.module.css";
import ImageOne from "./Picture/Percent.png";
import ImageTwo from "./Picture/tenge.png";
import ImageThree from "./Picture/check.png";

const ContentTwo = () => {
  return (
    <container>
      <div className={s.containerTwo}>
        <div className={s.header}>
          <p>Получи свою долю пирога</p>
        </div>
        <div className={s.threePrinciple}>
          <div className={s.Principle}>
            <div>
              <img className={s.Illustration} src={ImageOne} alt="Zero Commissions" />
            </div>
            <div className={s.Title}>Никаких коммиссий</div>
            <div className={s.About}>
              Покупайте, продавайте акции мировых компаний без потери денег на
              коммиссиях.
            </div>
          </div>
          <div className={s.Principle}>
          <div>
              <img className={s.IllustrationTenge} src={ImageTwo} alt="Zero Threshold" />
            </div>
            <div className={s.Title}>Инвестируйте любые суммы</div>
            <div className={s.About}>
              Иметь большой кошелек для того, чтобы стать инвестором - миф. Начни с
              $100, $10 или даже $1 доллара.
            </div>
          </div>
          <div className={s.Principle}>
            <div>
              <img className={s.Illustration} src={ImageThree} alt="Zero Zero entry requirement" />
            </div>
            <div className={s.Title}>Без требований к опыту</div>
            <div className={s.About}>
              Не нужно иметь докторскую степень в финансах или читать сотни книг
              для того, чтобы стать инвестором и зарабатывать на акциях.
            </div>
          </div>
        </div>
      </div>
      
    </container>
  );
};

export default ContentTwo;
