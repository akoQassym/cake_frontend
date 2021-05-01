import React, { useState } from 'react';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';
import s from './LoginForm.module.css';
import Nav from './Nav';

export default function SignUp() {
  const history = useHistory();
	const initialFormData = Object.freeze({
		firstName: '',
    secondName: '',
    email: '',
		password: '',
    phoneNumber: '',
    birthday: '',
    residency: '',
    city: ''
	});

  const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axiosInstance
			.post('user/register/', {
				firstName: formData.firstName,
        secondName: formData.secondName,
        email: formData.email,
        password: formData.password,
        phoneNumber: formData.phoneNumber,
        birthday: formData.birthday,
        residency: formData.residency,
        city: formData.city
			})
			.then((res) => {
				history.push('/login');
				console.log(res);
				console.log(res.data);
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
            <p className={s.Title}>Регистрация</p>
            <div className={s.sides}>
                <div className={s.leftSideAuth}>
                    <div className={s.formGroupAuth}>
                    <label htmlFor="firstName">Имя</label>
                      <input
                        type="text"
                        name="firstName"
                        className={s.authInput}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={s.formGroupAuth}>
                      <label htmlFor="secondName">Фамилия</label>
                      <input
                        type="text"
                        name="secondName"
                        className={s.authInput}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={s.formGroupAuth}>
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        name="email"
                        className={s.authInput}
                        onChange={handleChange}
                        required
                      />
                    </div>
                      
                    <div className={s.formGroupAuth}>
                      <label htmlFor="password">Придумайте пароль</label>
                      <input
                        type="password"
                        name="password"
                        className={s.authInput}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>


                  <div className={s.rightSideAuth}>
                    <div className={s.formGroupAuth}>
                      <label htmlFor="phoneNumber">Номер телефона</label>
                      <input
                        type="text"
                        name="phoneNumber"
                        className={s.authInput}
                        placeholder="+77070000000"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={s.formGroupAuth}>
                      <label htmlFor="birthday">Дата рождения</label>
                      <input
                        type="date"
                        name="birthday"
                        className={s.authInput}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={s.formGroupAuth}>
                      <label htmlFor="residency">Страна проживания</label>
                        <input
                          type="text"
                          name="residency"
                          className={s.authInput}
                          onChange={handleChange}
                          required
                        />
                    </div>
                        
                    <div className={s.formGroupAuth}>
                      <label htmlFor="city">Город проживания</label>
                      <input
                          type="text"
                          name="city"
                          className={s.authInput}
                          onChange={handleChange}
                          required
                        />
                    </div>
                  </div>
            </div>

            <input type="submit" className={s.loginBtn} onClick={handleSubmit} value="Создать аккаунт"/>
          </form>
        </div>
      </div>
    
  );
}