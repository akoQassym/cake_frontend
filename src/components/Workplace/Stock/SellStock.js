import React from "react";
import s from "./MainFile.module.css";

const finApi = process.env.REACT_APP_FIN_API_KEY;

class SellStock extends React.Component {
    state = {
        loading: true,
        stock: {},
        option: "stock",
        stockAmount: 0,
        dollar: 0
    };

    async realTime() {
        const url = 'https://financialmodelingprep.com/api/v3/quote/AAPL?apikey='+finApi;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ stock: data[0], loading: false });
        // setInterval(async () => {
        //     const url = 'https://financialmodelingprep.com/api/v3/quote/AAPL?apikey='+finApi;
        //     const response = await fetch(url);
        //     const data = await response.json();
        //     this.setState({ stock: data[0], loading: false });
        // }, 60000);
    }

    render() {
        return (
            <form className={s.stockForm}>
                <div className={s.formGroup}>
                    <label className={s.buysellLabel} htmlFor={s.stockOrMoney}>Продавать в</label>
                    <select id={s.stockOrMoney} className={s.buysellInput}>
                        <option>Цельные акции</option>
                        <option>Доли акции</option>
                    </select>
                </div>
                <div className={s.formGroup}>
                    <label className={s.buysellLabel}  htmlFor={s.amount}>Количество</label>
                    <input
                        className={s.buysellInput}
                        type="number"
                        name="number"
                        required
                        id={s.amount}
                        // onChange={handleChange}
                    />
                </div>
            </form>
        )
    }
    
}

export default SellStock;