import React from "react";
import s from "./Title.module.css"

const Title = () => {
  return <div className={s.Title}><p>Обладайте акциями за <span className={s.Bold}>любую сумму</span></p></div>;
};

export default Title;
