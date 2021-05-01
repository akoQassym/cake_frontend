import React from "react";
import s from "./Navigation.module.css";
import Logo from "../Pictures/Logo.png";

class Navbar extends React.Component {
    handleSubmit = (e) => {
      if(e) e.preventDefault();
      const ticker = this.input.value;
      window.location.assign(`/stock/${ticker}`);
    }

    render() {
        return (
            <nav className={s.structure}>
              <div className={s.logoDiv}>
                <a href="/">
                  <img className={s.Logo} src={Logo} alt="Logo" />
                </a>
              </div>
              <form className={s.searchDiv} onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Поиск по тикеру/названию" ref={(element) => { this.input = element }}/>
              </form>
              <div className={s.navDiv}>
                <a href="/">Портфель</a>
                <a href="/">Smart Save</a>
                <a href="/market">Рынок акций</a>
                <a href="/">Аккаунт</a>
                <a href="/logout">Выйти</a>
              </div>
            </nav>
        )
    }
};

export default Navbar;
