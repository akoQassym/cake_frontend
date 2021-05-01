import React, { useEffect, useRef, useState } from "react";
import s from "./Title.module.css";

const Title = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countDownRate = new Date('February 31, 2021 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownRate - now;

      const days = Math.floor(distance/(1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
      const seconds = Math.floor((distance % (1000 * 60) / 1000));

      if (distance < 0) {
        //stop the timer
        clearInterval(interval.current);
      } else {
        //update the timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000);
  };

  //componentDidMounts
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <container className={s.structure}>
      <div className={s.Title}>Самые выгодные тарифы</div>
      <div className={s.Text}>
        Выберите план, который подходит именно вам. Вы сможете поменять или отменить его в любое время.
      </div>
      <div className={s.Offer}>
        <p className={s.Attention}><span>Внимание! </span>Теперь и вы можете стать инвестором</p>
        <p>Сделайте предоплату за тариф <span className={s.Medium}>“Мгновенный”</span> и получите <span className={s.Discount}>70% скидку</span> на все остальные тарифы, которые будут доступны через</p>
        <div className={s.Timer}>
          <div className={s.Days}>
            <div className={s.DaysValue}>
              <p>{timerDays}</p>
            </div>
            <div className={s.DayStamp}>
              <p>Дней</p>
            </div>
          </div>

          <div className={s.Divider}>
            <p>:</p> 
          </div>

          <div className={s.Hours}> 
            <div className={s.HoursValue}>
              <p>{timerHours}</p>
            </div>
            <div className={s.HourStamp}>
              <p>Часов</p>
            </div>
          </div>

          <div className={s.Divider}>
            <p>:</p> 
          </div>
          
          <div className={s.Minutes}>
            <div className={s.MinutesValue}>
              <p>{timerMinutes}</p>
            </div>
            <div className={s.MinuteStamp}>
              <p>Минут</p>
          </div>
          </div>

          <div className={s.Divider}>
            <p>:</p> 
          </div>

          <div className={s.Seconds}>
            <div className={s.SecondsValue}>
              <p>{timerSeconds}</p>
            </div>
            <div className={s.SecondStamp}>
              <p>Секунд</p>
          </div>
          </div>
        </div>
        <button className={s.p_buttom}>Начать инвестировать</button>
      </div>
    </container>
  );
};

export default Title;
