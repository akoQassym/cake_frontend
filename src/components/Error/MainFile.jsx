import React from "react";
import s from "./MainFile.module.css";
import Logo from "./Pictures/Logo.png";

const NotFoundPage = () => {
  return (
      <container className={s.structure}>
          <div className={s.Box}>
            <img className={s.Logo} src={Logo} alt="Logo"/>
              <p className={s.MessageTitle}>404 Not Found!</p> 
              <p className={s.Message}>Упс, кажется этой страницы не существует</p>
          </div>
      </container>
  )
};

export default NotFoundPage;
