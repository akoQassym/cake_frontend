import React from "react";
import s from "./Navbar.module.css"
import Logo from "./Pictures/Logo.png"

const Navbar = () => {
  return (
    <nav className={s.structure}>
      <container className={s.Navi}>
        <a href="">
          <img className={s.Logo} src={Logo} alt="Logo" />
        </a>
        <a href="">Инвестиции</a>
        <a href="">О проекте</a>
        <a href="">Цены</a>
        <a href="">Помощь</a>
      </container>
      <container className={s.Lang}>
        <button className={s.First_a}>EN</button>
        <button className={s.First_b}>RU</button>
      </container>
      <container className={s.Auth}>
          <a className={s.Button} href="/register">Начать инвестировать</a>
      </container>
    </nav>
  );
};

export default Navbar;
