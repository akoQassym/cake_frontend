import React,{ useState } from 'react';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';
import s from './LoginForm.module.css';
import Nav from './Nav';


export default function LoginForm() {
  const history = useHistory();
	const initialFormData = Object.freeze({
		email: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axiosInstance
			.post(`token/`, {
				email: formData.email,
				password: formData.password,
			})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
			})
      .then(()=>{
				history.push('/market');
      });
	};

  return (
    <div className={s.structure}>
      <div className={s.LeftSide}>
        <div className={s.Banner}>
          <p className={s.H1}>Cake</p>
          <p className={s.H2}>Инвестировать в акции</p>
          <p className={s.H2}>мировых компаний стало легче</p>
        </div>
      </div>
      <div className={s.RightSide}>
        <Nav/>
        <form className={s.formAuth}>
          <p className={s.Title}>Вход</p>

          <div className={s.formGroupAuth}>
            <label htmlFor={s.username}>Email</label>
            <input
              type="text"
              name="email"
              className={s.authInput}
              autoFocus
              required
              id={s.username}
              onChange={handleChange}
            />
          </div>

          <div className={s.formGroupAuth}>
            <label htmlFor={s.password}>Пароль</label>
            <input
              type="password"
              name="password"
              className={s.authInput}
              required
              id={s.password}
              onChange={handleChange}
            />
          </div>
           
          <input type="submit" className={s.loginBtn} onClick={handleSubmit} value="Войти в систему"/>
        </form>
      </div>
    </div>
  );
}
