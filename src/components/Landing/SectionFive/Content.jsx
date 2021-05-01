import React from "react";
import s from "./Content.module.css";
import Picture from "./Pictures/SmartSave.png";

const ContentOne = () => {
  return (
    <container className={s.structure}>
        <div>
            <div className={s.Principle}>
                <p className={s.PrincipleTitle}>Регулярное откладывание в заданное время</p>
                <p className={s.PrincipleDescription}>Откладывайте определенную часть дохода - 10%, 20% и тд, в заданное вами время - ежемесячно, еженедельно и тд.</p>
            </div>
            <div className={s.Principle}>
                <p className={s.PrincipleTitle}>Округление ежедневных трат</p>
                <p className={s.PrincipleDescription}>Ежедневные траты округляются до 10, 100 и 1000 тг и инвестируются в ваше будущее.</p>
            </div>
            <button className={s.Button}>Начать инвестировать</button>
        </div>
        <div className={s.Picture}>
            <img className={s.SmartSave} src={Picture} alt="Invest in future" />
        </div>
    </container>
  );
};

export default ContentOne;
