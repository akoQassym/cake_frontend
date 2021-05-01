import React from "react";
import s from "./Content.module.css";
import ImageOne from "./Pictures/Education.svg";
import ImageTwo from "./Pictures/Security.svg";
import ImageThree from "./Pictures/Commissions.svg";

const ContentSix = () => {
  return (
    <container className={s.structure}>
      <div className={s.Education}>
        <div>
          <img className={s.ImageOne} src={ImageOne} alt="Education" />
        </div>
        <div>
          <p className={s.Principle}>Регулярное расширение знаний о фондовом рынке</p>
          <p className={s.Description}>Изучите основы, получайте ежедневные новости и отчеты, рекомендации от профессионалов и расширяйте знания независимо от того, есть у вас опыт или нет.</p>
        </div>
      </div>
      
      <div className={s.Security}>
        <div>
          <img className={s.ImageTwo} src={ImageTwo} alt="High Security" />
        </div>
        <div>
          <p className={s.Principle}>Безопасность на уровне банков</p>
          <p className={s.Description}>Безопасность ваших данных и вашего капитала гарантируется 256-битным шифрованием, а права каждого инвестора защищены законами Республики Казахстан.</p>
        </div>
      </div>

      <div className={s.Commissions}>
        <div>
          <img className={s.ImageThree} src={ImageThree} alt="Zero Commissions" />
        </div>
        <div>
          <p className={s.Principle}>Отсутствие коммиссий</p>
          <p className={s.Description}>Избавьтесь от риска потери денег: совершайте любые операции без всяких коммиссий и налогов.</p>
        </div>
      </div>
    </container>
  );
};

export default ContentSix;
