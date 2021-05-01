import React from 'react';
import PropTypes from 'prop-types';
import s from './Nav.module.css';

function Nav(props) {
  const logged_out_nav = (
    <ul>
      <li><a href="/login" className={s.loginNav}>Войти в систему</a></li>
      <li><a href="/register" className={s.registerNav}>Создать аккаунт</a></li>
    </ul>
  );

  const logged_in_nav = (
    <ul>
      <li onClick={props.handle_logout}>logout</li>
    </ul>
  );
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};