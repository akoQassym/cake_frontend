import React, { useEffect, useRef, useState } from "react";
import s from "./MainFile.module.css";
import { useHistory } from 'react-router-dom';

const finApi = process.env.REACT_APP_FIN_API_KEY;

function BuyStock(props) {
    const [ticker, setTicker] = useState(props.ticker);
    const [loading, setLoading] = useState(false);
    const [stock, setStock] = useState({});
    const [option, setOption] = useState("stock");
    const [stockAmount, setStockAmount] = useState(0);
    const [dollar, setDollar] = useState(0);

    const [exception, setException] = useState(false);
    const [applyOrder, setApplyOrder] = useState(true);
    const [confirmOrder, setConfirmOrder] = useState(false);

    useEffect(()=>{
        realTime();
    }, [])

    // const history = useHistory();
	// const initialFormData = Object.freeze({
	// 	email: '',
	// 	password: '',
	// });

	// const [formData, updateFormData] = useState(initialFormData);

	// const handleChange = (e) => {
	// 	updateFormData({
	// 		...formData,
	// 		[e.target.name]: e.target.value.trim(),
	// 	});
	// };

    // const handleSubmitBuy = (e) => {
    //     e.preventDefault();

    //     axiosInstance
    //         .post(`stock/buy/`, {
    //             user: 1,
    //             symbol: stock.symbol,
    //             shareAmount: formGroup
    //         })
    // }

    async function realTime() {
        const url = `https://financialmodelingprep.com/api/v3/quote/${ticker}?apikey=${finApi}`;
        const response = await fetch(url);
        const data = await response.json();
        setStock(data[0]);
        setLoading(false);
        // setInterval(async () => {
        //     const url = 'https://financialmodelingprep.com/api/v3/quote/${ticker}?apikey='+finApi;
        //     const response = await fetch(url);
        //     const data = await response.json();
        //     setStock(data[0]);
        //     setLoading(false);
        // }, 60000);
    }

    if(loading) {
        return (
            <div className={s.wrapper}>
                <span className={s.circle + ' ' + s.circle1}></span>
                <span className={s.circle + ' ' + s.circle2}></span>
                <span className={s.circle + ' ' + s.circle3}></span>
                <span className={s.circle + ' ' + s.circle4}></span>
            </div>
        )
    } else {
    return (
        <form className={s.stockForm}>
            <div className={s.formGroup}>
                <label className={s.buysellLabel} htmlFor={s.stockOrMoney}>Инвестировать в</label>
                <select id={s.stockOrMoney}
                        className={s.buysellInput}
                        onChange={(e)=>{
                            const selectedOption = e.target.value;
                            setOption(selectedOption);
                            setStockAmount(0);
                            setDollar(0);
                            setException(false);
                            setApplyOrder(true);
                            setConfirmOrder(false);
                        }}
                >
                    <option value="stock">Акциях</option>
                    <option value="dollar">Долларах</option>
                </select>
            </div>
            {option === "stock" ? 
                <div className={s.formGroup}>
                    <label className={s.buysellLabel} htmlFor={s.amount}>Количество акций</label>
                    <input
                        className={s.buysellInput}
                        type="number"
                        name="number"
                        required
                        id={s.amount}
                        value={stockAmount}
                        onChange={(e)=>{
                            var dollarAmount = e.target.value*(stock.price);
                            setStockAmount(e.target.value);
                            setDollar(dollarAmount.toFixed(4));
                        }}
                    />
                </div>
            :
                <div className={s.formGroup}>
                    <label className={s.buysellLabel} htmlFor={s.amount}>Сумма в $</label>
                    <input
                        className={s.buysellInput}
                        type="number"
                        name="number"
                        required
                        id={s.amount}
                        value={dollar}
                        onChange={(e)=>{
                            var stockAmount = (e.target.value)/(stock.price);
                            setStockAmount(stockAmount.toFixed(4));
                            setDollar(e.target.value);
                        }}
                    />
                </div>
            }
            <div className={s.formGroupInfo}>
                <span className={s.stockInfo}>Рыночная Стоимость</span>
                <span className={s.stockPrice}>${stock.price}</span>
            </div>
            <br/>
            <div className={s.formResult}>
                <span className={s.stockAmountLabel}>Количество акций</span>
                <span className={s.stockAmountValue}>{stockAmount}</span>
            </div>
            <br/>
            <div className={s.formResult}>
                <span className={s.dollarAmountLabel}>Итоговая сумма</span>
                <span className={s.dollarAmountValue}>${dollar}</span>
            </div>
            <p className={exception ? s.exception : s.exception + ' ' + s.hideBtn}>Укажите количество</p>
            <button 
                type="button"
                onClick={
                    ()=>{
                        if (stockAmount>0 && dollar>0) {
                            setException(false);
                            setApplyOrder(false);
                            setConfirmOrder(true);
                        } else {
                            setException(true);
                        }   
                    }
                } 
                className={applyOrder ? s.formSubmitBtn : s.formSubmitBtnDisabled + ' ' + s.hideOpacityBtn}
            >Выставить ордер</button>
            <button type="submit" className={confirmOrder ? s.formConfirmBtn : s.formConfirmBtn + ' ' + s.hideBtn}>Подтвердить ордер</button>
            <p 
                onClick={
                    ()=>{
                        setApplyOrder(true);
                        setConfirmOrder(false);
                    }
                }
                className={confirmOrder ? s.formCancel : s.formCancel + ' ' + s.hideBtn}
            >Отменить ордер</p>
        </form>
    )}
    
}

export default BuyStock;