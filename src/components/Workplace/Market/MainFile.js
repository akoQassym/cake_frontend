import React, {useEffect, useState} from "react";
import Logo from "../Pictures/Logo.png";
import Footer from "../Footer/MainFile";
import Nav from "../Nav/Navigation";
import s from './MainFile.module.css';

const finApi = process.env.REACT_APP_FIN_API_KEY;

function StockMarket() {

    const [loading, setLoading] = useState(true);
    const [stocks, setStocks] = useState({ });
    // const [priceChanges, setPriceChanges] = useState({ });

    const [pressed, setPressed] = useState("");

    useEffect(()=> {
        topStocksFetch("Technology");
    }, [])

    function MoneyFormat(labelValue) {
        // Nine Zeroes for Billions
        return Math.abs(Number(labelValue)) >= 1.0e+9
            ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + " млрд."
            // Six Zeroes for Millions 
            : Math.abs(Number(labelValue)) >= 1.0e+6
            ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + " млн."
            // Three Zeroes for Thousands
            : Math.abs(Number(labelValue)) >= 1.0e+3
            ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + " тыс."
            : Math.abs(Number(labelValue));
    }

    async function topStocksFetch(sector) {
        const url = `https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=5000000000&betaMoreThan=1&volumeMoreThan=10000&sector=${sector}&limit=20&apikey=${finApi}`;
        console.log(url)
        const response = await fetch(url);
        const data = await response.json();
        console.log(url);
        setStocks(data);
        setPressed(sector);
        setLoading(false);
    }

    // function priceChangeFetch() {
    //     Object.keys(stocks).map(async (key) => {
    //         const url2 = `https://financialmodelingprep.com/api/v3/quote/${stocks[key].symbol}?apikey=${finApi}`;
    //         const response2 = await fetch(url2);
    //         const data2 = await response2.json();
    //         setPriceChanges(prevPercent => {
    //             return {...prevPercent, priceChanges: data2[0].changesPercentage}
    //         });
    //     });
    //     console.log(priceChanges);
    //     setLoading(false);
    // }

    function tickerClick(ticker) {
        window.location.assign(`/stock/${ticker}`);
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
            <div className={s.structure}>
                <Nav />
                <div className={s.body}>
                    <div className={s.tableBody}>
    
                        <div className={s.tableInfo}>
                            <p className={s.tableInfoTitle}>Топ 100 акций</p>
                            <p className={s.tableInfoAbout}>Здесь собран список 100 самых популярных компаний для инвестирования</p>
                        </div>
    
                        <div className={s.tableContainer}>
                        
                            <div className={s.tableNav}>
                                <div className={pressed === "Technology" ? s.tableNavIndividual + ' ' + s.tableNavIndividualPressed : s.tableNavIndividual} onClick={()=>topStocksFetch("Technology")}>
                                    Технологии
                                </div>
                                <div className={pressed === "Communication" ? s.tableNavIndividual + ' ' + s.tableNavIndividualPressed : s.tableNavIndividual} onClick={()=>topStocksFetch("Communication")}>
                                    Коммуникация
                                </div>
                                <div className={pressed === "Financial"  ? s.tableNavIndividual + ' ' + s.tableNavIndividualPressed : s.tableNavIndividual} onClick={()=>topStocksFetch("Financial")}>
                                    Финансы
                                </div>
                                <div className={pressed === "Consumer" ? s.tableNavIndividual + ' ' + s.tableNavIndividualPressed : s.tableNavIndividual} onClick={()=>topStocksFetch("Consumer")}>
                                    Потребительский
                                </div>
                                <div className={pressed === "Energy" ? s.tableNavIndividual + ' ' + s.tableNavIndividualPressed : s.tableNavIndividual} onClick={()=>topStocksFetch("Energy")}>
                                    Энергический
                                </div>
                                <div className={pressed === "Industrial" ? s.tableNavIndividual + ' ' + s.tableNavIndividualPressed : s.tableNavIndividual} onClick={()=>topStocksFetch("Industrial")}>
                                    Промышленность
                                </div>
                                <div className={pressed === "Healthcare" ? s.tableNavIndividual + ' ' + s.tableNavIndividualPressed : s.tableNavIndividual} onClick={()=>topStocksFetch("Healthcare")}>
                                    Здравохранение
                                </div>
                            </div>
    
                            <div className={s.tableContent}>
                                <table className={s.stockTable}>
                                    <tr>
                                        <th>Название компании</th>
                                        <th>Тикер</th>
                                        <th>Цена</th>
                                        <th>Рыночная капитализация</th>
                                        <th>Индустрия</th>
                                    </tr>
                                    {Object.keys(stocks).map((key) => {
                                        return (
                                            <tr onClick={()=>tickerClick(stocks[key].symbol)}>
                                                <td>{stocks[key].companyName}</td>
                                                <td>{stocks[key].symbol}</td>
                                                <td>{(stocks[key].price/1).toFixed(2)}</td>
                                                <td>{MoneyFormat(stocks[key].marketCap)}</td>
                                                <td>{stocks[key].industry}</td>
                                            </tr>
                                        )
                                    })}
                                </table>
                            </div>
    
                        </div>
    
                        
    
                    </div>
                </div>
                <Footer />
            </div>
                            
        )
    }

    
}

export default StockMarket;