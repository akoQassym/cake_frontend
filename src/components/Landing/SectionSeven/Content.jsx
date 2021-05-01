import React from "react";
import s from "./Content.module.css";

const Plan = () => {
  return (
    <div className={s.structure}>
      <div className={s.descriptionWrap}>
        <div className={s.MajorOne}>
          <p><span>Мгновенный</span></p>
          <p className={s.Minor}>Для: новичков, просто чтобы попробовать</p>
          <p className={s.Price}>$1/месяц</p>
        </div>
        <div className={s.features_instant}>
          <ul>
            <li>Инвестирование в доли акций</li>
            <li>Базовое обучение и рекомендации</li>
            <li>Ежедневные новости, аналитические отчеты</li>
          </ul>
        </div>
        <container className={s.button}>
          <div className={s.bufer}>
            <a href="https://api.paybox.money/payment.php?pg_merchant_id=535198&pg_amount=1&pg_currency=USD&pg_description=%D0%9F%D0%BB%D0%B0%D0%BD+%22%D0%9C%D0%B3%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9%22+%7C+%D0%94%D0%BB%D1%8F+%D0%BD%D0%BE%D0%B2%D0%B8%D1%87%D0%BA%D0%BE%D0%B2%2C+%D1%87%D1%82%D0%BE%D0%B1%D1%8B+%D0%BF%D0%BE%D0%BF%D1%80%D0%BE%D0%B1%D0%BE%D0%B2%D0%B0%D1%82%D1%8C&pg_salt=1cEk0fGlPRIshCNl&pg_language=ru&pg_sig=e88e6342bca93c4c8db2a4fb996e6a29"><button className={s.p_buttom}>Начать инвестировать</button></a>
          </div>
        </container>
      </div>

      <div className={s.descriptionWrap2}>
        <div className={s.MajorTwo}>
          <p><span>Gold</span></p>
          <p className={s.Minor}>Для: долгосрочных вкладчиков, опытных </p>
          <p className={s.Price}>$4/месяц</p>
        </div>
        <div className={s.features_instant}>
          <ul>
            <li>Все, что в пакете “Мгновенный”</li>
            <li>Широкий спектр профессиональных инструментов аналитики</li>
            <li>SMART откладывание (от дохода и ежедневных трат)</li>
            <li>Инвестирование с 2х маржой</li>
          </ul>
        </div>
        <container className={s.button}>
          <div className={s.bufer}>
            <p>СКОРО</p>
          </div>
        </container>
      </div>

      <div className={s.descriptionWrap3}>
        <div className={s.MajorThree}>
          <p><span>Семья</span></p>
          <p className={s.Minor}>Для: семьи и будущего детей</p>
          <p className={s.Price}>$7/месяц</p>
        </div>
        <div className={s.features_instant}>
          <ul>
            <li>Все, что в пакете “Gold”</li>
            <li>Семейное финансовое консультирование</li>
            <li>Два инвестиционных счета для детей</li>
            <li>Развивающие курсы для детей</li>
          </ul>
        </div>
        <container className={s.button}>
          <div className={s.bufer}>
            <p>СКОРО</p>
          </div>
        </container>
      </div>
    </div>
  );
};

export default Plan;
