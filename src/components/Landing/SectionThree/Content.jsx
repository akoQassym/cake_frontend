import React, { useState } from "react";
import s from "./Content.module.css";

const ContentThree = () => {
    const[oneYear, setOneYear] = useState('');
    const[fiveYears, setFiveYears] = useState('');
    const[tenYears, setTenYears] = useState('');
    const[yearPercent, setYearPercent] = useState('');
    const[fivePercent, setFivePercent] = useState('');
    const[tenPercent, setTenPercent] = useState('');
    function handleChange(e) {
        var dollars = e.target.value/430;
        var year = Math.round(dollars * (Math.pow(1+0.12/12, 12*1) - 1) * 12/0.12);
        var five = Math.round(dollars * (Math.pow(1+0.12/12, 12*5) - 1) * 12/0.12);
        var ten = Math.round(dollars * (Math.pow(1+0.12/12, 12*10) - 1) * 12/0.12); 
        var yearPercent = Math.round(year/(dollars*12)*100)-100;
        var fivePercent = Math.round((five/(dollars*12*5))*100)-100;
        var tenPercent = Math.round(ten/(dollars*12*10)*100)-100;
        setOneYear(year);
        setFiveYears(five);
        setTenYears(ten);
        setYearPercent(yearPercent);
        setFivePercent(fivePercent);
        setTenPercent(tenPercent);
    }
    
    return (
        <container className={s.structure}>
            <div className={s.Title}>
                <p>Во что инвестировать? Сколько откладывать?</p>
            </div>
            <div className={s.Box}>
                <div className={s.Picture}></div>
                <div className={s.Calculator}>
                    <p className={s.Topic}>S&P 500</p>
                    <p className={s.Meaning}>500 самых технологичных компаний мира (Apple, Tesla, Microsoft, Visa, Bank of America, Walt Disney, JP Morgan, Paypal, Intel, Coca-Cola и другие).</p>
                    <div className={s.Calculating}>
                        <div>
                            <p>Инвестируя каждый месяц по (тг)</p>
                        </div>
                        <div className={s.Input}>
                            <input className={s.InputForm} type="number" placeholder="10% от зарплаты" min={430} max={100000000000} onChange={handleChange} />
                        </div>
                        <div>
                            <p>Через 1 год</p>
                        </div>
                        <div className={s.Result}>
                            <p>${oneYear} (<span className={s.Profit}>+{yearPercent}%</span> заработка)</p>
                        </div>
                        <div>
                            <p>Через 5 лет</p>
                        </div>
                        <div className={s.Result}>
                            <p>${fiveYears} (<span className={s.Profit}>+{fivePercent}%</span> заработка)</p>
                        </div>
                        <div>
                            <p>Через 10 лет</p>
                        </div>
                        <div className={s.Result}>
                            <p>${tenYears} (<span className={s.Profit}>+{tenPercent}%</span> заработка)</p>
                        </div>

                    </div>
                </div>
            </div>
        </container>
    );
};

export default ContentThree;