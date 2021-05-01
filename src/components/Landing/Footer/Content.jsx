import React from "react";
import s from "./Content.module.css";
import Logo from "./Pictures/Logo.png";

const ContentOne = () => {
  return (
    <container className={s.structure}>
        <div className={s.LeftSide}>
            <div className={s.Pictures}>
                <img className={s.Logo} src={Logo} alt="Logo Cake"/>
            </div>
            <div>
                <p  className={s.LeftP}>У вас остались вопросы?</p>
                <button className={s.Button}>Написать нам</button>
            </div>
        </div>
        <div className={s.RightSide}>
            <div className={s.WhoAreWe}>
                <p className={s.Title}>Кто мы?</p>
                <p>О нас</p>
                <p>Контактная информация</p>
            </div>
            <div className={s.OurProducts}>
                <p className={s.Title}>Наши продукты</p>
                <p>Инвестиции</p>
                <p>SMART накопления</p>
                <p>Обучение</p>
            </div>
            <div className={s.BecomePartner}>
                <p className={s.Title}>Стать Партнером</p>
                <p>Форма заполнения</p>
            </div>

        </div>
    </container>
  );
};

export default ContentOne;
