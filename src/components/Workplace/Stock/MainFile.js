import React, {useEffect, useState} from "react";
import Logo from "../Pictures/Logo.png";
import Footer from "../Footer/MainFile";
import Nav from "../Nav/Navigation";
import s from './MainFile.module.css';
import { createChart } from 'lightweight-charts';
import { Radar } from 'react-chartjs-2';
import { nominalTypeHack } from "prop-types";
import  { Redirect, useParams } from 'react-router-dom';

import BuyStock from "./BuyStock.js";
import SellStock from "./SellStock.js";
import axiosInstance from "../../../axios";

const finApi = process.env.REACT_APP_FIN_API_KEY;
const alphaApi = process.env.REACT_APP_ALPHA_API_KEY;

function FetchStockData() {

    const { ticker } = useParams();

    const [redirect, setRedirect] = useState('/login');
    const [timePassed, setTimePassed] = useState(0);
    const [loading, setLoading] = useState(true);
    const [stock, setStock] = useState({ });

    const [buyOrSell, setBuyOrSell] = useState('buy');

    const [shortened, setShortened] = useState(true);
    const [shortened2, setShortened2] = useState(true);

    const [description, setDescription] = useState(' ');
    const [image, setImage] = useState(' ');

    const [ceo, setCeo] = useState(' ');
    const [fullTimeEmployees, setFullTimeEmployees] = useState(' ');
    const [industry, setIndustry] = useState(' ');
    const [exchangeShortName, setExchangeShortName] = useState(' ');
    const [mktCap, setMktCap] = useState(' ');
    const [volAvg, setVolAvg] = useState(' ');
    const [range, setRange] = useState(' ');
    const [lastDiv, setLastDiv] = useState(' ');
    const [lastDivPercent, setLastDivPercent] = useState(' ');
    const [beta, setBeta] = useState(' ');
    const [returnOnAssetsTTM, setReturnOnAssetsTTM] = useState(' ');
    const [returnOnEquityTTM, setReturnOnEquityTTM] = useState(' ');
    const [roicTTM, setRoicTTM] = useState(' ');

    const [valueAnalysis, setValueAnalysis] = useState(2.5);
    const [futureAnalysis, setFutureAnalysis] = useState(1.25);
    const [pastAnalysis, setPastAnalysis] = useState(3.769);
    const [healthAnalysis, setHealthAnalysis] = useState(null);
    const [dividendAnalysis, setDividendAnalysis] = useState(null);

    useEffect(()=>{
        fetchGraphInstant();
        setInterval(timePassedFunc, 3600000);
        profile();
        findRoicTTM();
    }, [])

    useEffect(()=>{
        finStats();
    }, [lastDivPercent])

    useEffect(()=>{
        realTime();
    }, [timePassed])


    function timePassedFunc() {
        setTimePassed(prevTime => prevTime + 60000);
    }

    async function realTime() {
        const url = `https://financialmodelingprep.com/api/v3/quote/${ticker}?apikey=${finApi}`;
        const response = await fetch(url);
        const data = await response.json();
        setStock(data[0]);
        setLoading(false);        
    }

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

    function MoneyFormatEmployee(labelValue) {
        // Nine Zeroes for Billions
        return Math.abs(Number(labelValue)) >= 1.0e+9
            ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(0) + " млрд."
            // Six Zeroes for Millions 
            : Math.abs(Number(labelValue)) >= 1.0e+6
            ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(0) + " млн."
            // Three Zeroes for Thousands
            : Math.abs(Number(labelValue)) >= 1.0e+3
            ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(0) + " тыс."
            : Math.abs(Number(labelValue));
    }

    function fetchGraphInstant() {
        let url = `https://financialmodelingprep.com/api/v3/historical-price-full/${ticker}?apikey=${finApi}`;
        fetch(url)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data){
                    var graphArray = [];
                    for (var keys in data.historical) {
                        graphArray.unshift({
                            time: data.historical[keys].date, 
                            value: parseFloat(data.historical[keys].close)
                        });
                    }
                    const chart = createChart(document.getElementById("graph"), { 
                        height: 400,
                        layout: {
                            fontFamily: 'Rubik',
                            backgroundColor: 'white',
                        },
                        grid: {
                            vertLines: {
                                visible: false,
                            },
                            horzLines: {
                                visible: false,
                            },
                        },
                        crosshair: {
                            horzLine: {
                                visible: false,
                            },
                        },
                        rightPriceScale: {
                            borderVisible: false,
                        },
                        timeScale: {
                            borderVisible: false,
                            barSpacing: 11
                        },
                        localization: {
                            locale: 'ru-RU',
                        },
                    });
                    const areaSeries = chart.addAreaSeries({
                        lineColor: '#00CE9B',
                        crosshairMarkerBorderColor: '#00CE9B',
                        crosshairMarkerBackgroundColor: '#00CE9B',
                        priceRange: {
                            minValue: 0,
                        },
                       
                    });
                    areaSeries.applyOptions({
                        layout: {
                            fontFamily: 'Rubik',
                        },
                    });
                    areaSeries.setData(graphArray); 
                }
            )
            .catch(error => console.log(error));
    }

    function profile() {
        let url = `https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=${finApi}`;
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setDescription(data[0].description);
                setImage(data[0].image);
                setCeo(data[0].ceo);
                setFullTimeEmployees(data[0].fullTimeEmployees);
                setIndustry(data[0].industry);
                setExchangeShortName(data[0].exchangeShortName);
                setMktCap(data[0].mktCap);
                setVolAvg(data[0].volAvg);
                setRange(data[0].range);
                setLastDiv((data[0].lastDiv/1).toFixed(2));
                setLastDivPercent((data[0].lastDiv*100/data[0].price).toFixed(2));
                setBeta(data[0].beta);
            })
    }

    function finStats() {
        let url = `https://financialmodelingprep.com/api/v3/ratios-ttm/${ticker}?apikey=${finApi}`;
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setReturnOnAssetsTTM(data[0].returnOnAssetsTTM);
                setReturnOnEquityTTM(data[0].returnOnEquityTTM);
                setHealthAnalysis((data[0].quickRatioTTM*5).toFixed(3));
                if (lastDivPercent < 0) {
                    setDividendAnalysis(0);
                } else if (lastDivPercent < 5) {
                    setDividendAnalysis((lastDiv/1).toFixed(3));
                } else if (lastDivPercent > 5) {
                    setDividendAnalysis(5);
                } else {
                    setDividendAnalysis(null);
                }
            })
    }

    function findRoicTTM() {
        let url = `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${ticker}?limit=40&apikey=${finApi}`;
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setRoicTTM(data[0].roicTTM);
            })
    }

    const state = {
        labels: ['Ценность', 'Будущее', 'Прошлое',
                    'Здоровье', 'Выплаты'],
        datasets: [
            {
                backgroundColor: 'rgba(0.0, 206.0, 155.0, 0.25)',
                borderColor: 'rgba(0.0, 206.0, 155.0, 1.0)',
                pointBackgroundColor: 'rgba(0.0, 206.0, 155.0, 0.75)',
                pointBorderColor: 'rgba(0.0, 206.0, 155.0, 1.0)',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                pointRadius: 4,
                borderWidth: 3,
                spanGaps: true,
                lineTension: 0.25,
                data: [valueAnalysis, futureAnalysis, pastAnalysis, healthAnalysis, dividendAnalysis],
            }
        ]
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
            <div>
                <div className={s.structure}>
                <Nav/>
                    <div className={s.gridDiv}>
    
                        <div className={s.leftSide}>
                            <div className={s.leftSideGraph}>
    
                                <div className={s.liveInfo}>
                                    <div className={s.symbolLogoGrid}>
                                        <span className={s.symbol}>{stock.symbol}</span> 
                                        <img className={s.stockLogo} src={image}/>
                                    </div>
                                    <div className={s.name}>{stock.name}</div>
                                    
                                    <br/>
                                    <div className={s.price}>${stock.price}</div>
                                    <div className={s.changesPercentage}>{stock.changesPercentage>0 ? "+" : ''}{stock.changesPercentage}%</div>
                                </div>
                                <div id="graph" className={s.graph}>
    
                                </div>
                                <div className={s.rangeNav}>
                                    <button id="day">1Д</button>
                                    <button id="week">1Н</button>
                                    <button id="month">1М</button>
                                    <button id="hundred" className={s.pressed}>100Д</button>
                                    <button id="year">1Г</button>
                                    <button id="all">ВСЕ</button>
                                </div>
    
                            </div>
    
                            <div className={s.leftSideOther}>
                                <div className={s.profile}>
                                    <p className={s.profileTitle}>Профиль</p>
                                    <div className={shortened===true ? s.companyInfo + ' ' + s.shortened : s.companyInfo}>
                                        {description}
                                    </div>
                                    {shortened===true ?
                                        <p className={s.longeringBtn} onClick={()=>{ setShortened(false) }}>Развернуть</p>
                                    :
                                        <p className={s.longeringBtn} onClick={()=>{ setShortened(true) }}>Свернуть</p>
                                    }
                                    <div className={shortened2===true ? s.companyStats + ' ' + s.companyStatGrid1 : s.companyStats + ' ' + s.companyStatGrid2}>
                                        <div className={s.companyStatsGroup}>
                                            <p className={s.companyStatsGroupTitle}>CEO</p>
                                            <p className={s.companyStatsGroupValue}>{ceo}</p>
                                        </div>
                                        <div className={s.companyStatsGroup}>
                                            <p className={s.companyStatsGroupTitle}>Количество работников</p>
                                            <p className={s.companyStatsGroupValue}>{MoneyFormatEmployee(fullTimeEmployees)}</p>
                                        </div>
                                        <div className={s.companyStatsGroup}>
                                            <p className={s.companyStatsGroupTitle}>Индустрия</p>
                                            <p className={s.companyStatsGroupValue}>{industry}</p>
                                        </div>
                                        <div className={s.companyStatsGroup}>
                                            <p className={s.companyStatsGroupTitle}>Биржа</p>
                                            <p className={s.companyStatsGroupValue}>{exchangeShortName}</p>
                                        </div>
                                        <div className={s.companyStatsGroup}>
                                            <p className={s.companyStatsGroupTitle}>Рыночная капитализация</p>
                                            <p className={s.companyStatsGroupValue}>${MoneyFormat(mktCap)}</p>
                                        </div>
                                        <div className={s.companyStatsGroup}>
                                            <p className={s.companyStatsGroupTitle}>Средний объем</p>
                                            <p className={s.companyStatsGroupValue}>${MoneyFormat(volAvg)}</p>
                                        </div>
                                        <div className={s.companyStatsGroup}>
                                            <p className={s.companyStatsGroupTitle}>Годичный диапазон</p>
                                            <p className={s.companyStatsGroupValue}>${range}</p>
                                        </div>
                                        <div className={s.companyStatsGroup}>
                                            <p className={s.companyStatsGroupTitle}>Дивидендный доход</p>
                                            <p className={s.companyStatsGroupValue}>${lastDiv} ({lastDivPercent}%)</p>
                                        </div>
                                        <div className={shortened2===true ? s.companyStatsGroup + ' ' + s.shortened2 : s.companyStatsGroup}>
                                            <p className={s.companyStatsGroupTitle}>Бета (1 год)</p>
                                            <p className={shortened2===true ? s.companyStatsGroupValue + ' ' + s.shortened2 : s.companyStatsGroupValue}>{(beta/1).toFixed(2)}</p>
                                        </div>
                                        <div className={shortened2===true ? s.companyStatsGroup + ' ' + s.shortened2 : s.companyStatsGroup}>
                                            <p className={s.companyStatsGroupTitle}>ROA</p>
                                            <p className={s.companyStatsGroupValue}>{(returnOnAssetsTTM*100).toFixed(2)}%</p>
                                        </div>
                                        <div className={shortened2===true ? s.companyStatsGroup + ' ' + s.shortened2 : s.companyStatsGroup}>
                                            <p className={s.companyStatsGroupTitle}>ROE</p>
                                            <p className={s.companyStatsGroupValue}>{(returnOnEquityTTM*100).toFixed(2)}%</p>
                                        </div>
                                        <div className={shortened2===true ? s.companyStatsGroup + ' ' + s.shortened2 : s.companyStatsGroup}>
                                            <p className={s.companyStatsGroupTitle}>ROI</p>
                                            <p className={s.companyStatsGroupValue}>{(roicTTM*100).toFixed(2)}%</p>
                                        </div>
                                    </div>
                                    {shortened2===true ?
                                        <p className={s.longeringBtn} onClick={()=>{ setShortened2(false) }}>Развернуть</p>
                                    :
                                        <p className={s.longeringBtn} onClick={()=>{ setShortened2(true) }}>Свернуть</p>
                                    }
                                </div>
    
                                <div className={s.profile}>
                                    <p className={s.profileTitle}>Аналитика</p>
                                    <div className={s.profileAnalyticsGrid}>
                                        <div className={s.profileAnalyticsDescription}>
                                            <div className={s.profileAnalyticsDescriptionGroup}>
                                                <p className={s.profileAnalyticsDescriptionGroupTitle}>Ценность</p>
                                                <p className={s.profileAnalyticsDescriptionGroupText}>Недооценена ли компания по сравнению с ее справедливой стоимостью и аналогами?</p>
                                            </div>
                                            <div className={s.profileAnalyticsDescriptionGroup}>
                                                <p className={s.profileAnalyticsDescriptionGroupTitle}>Будущее</p>
                                                <p className={s.profileAnalyticsDescriptionGroupText}>Каковы прогнозы на следующие 1-3 года?</p>
                                            </div>
                                            <div className={s.profileAnalyticsDescriptionGroup}>
                                                <p className={s.profileAnalyticsDescriptionGroupTitle}>Прошлое</p>
                                                <p className={s.profileAnalyticsDescriptionGroupText}>Как компания работала за последние 5 лет?</p>
                                            </div>
                                            <div className={s.profileAnalyticsDescriptionGroup}>
                                                <p className={s.profileAnalyticsDescriptionGroupTitle}>Здоровье</p>
                                                <p className={s.profileAnalyticsDescriptionGroupText}>Имеет ли компания сильное финансовое положение и управляемый долг?</p>
                                            </div>
                                            <div className={s.profileAnalyticsDescriptionGroup}>
                                                <p className={s.profileAnalyticsDescriptionGroupTitle}>Выплаты</p>
                                                <p className={s.profileAnalyticsDescriptionGroupText}>Выплачивает ли компания хорошие, надежные и устойчивые дивиденды?</p>
                                            </div>
                                        </div>
                                        <div className={s.profileAnalyticsRadar}>
                                            <Radar
                                                data={state}
                                                width={350}
                                                height={350}
                                                options={{
                                                    animation: false,
                                                    maintainAspectRatio: false,
                                                    scale: {
                                                        gridLines: {
                                                            circular: true,
                                                            color: '#4F5665',
                                                        },
                                                        ticks: {
                                                            suggestedMin: 0,
                                                            suggestedMax: 5,
                                                            display: false,
                                                            showLabelBackdrop: false,
                                                            stepSize: 1,
                                                        },
                                                        pointLabels: {
                                                            fontFamily: 'Rubik',
                                                            fontSize: 16,
                                                            fontColor: 'black',
                                                        },
                                                        angleLines: {
                                                            color: "white",
                                                            z: 2,
                                                        },
                                                    },
                                                    legend: {
                                                        display: false,
                                                    },
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
    
                        <div className={s.rightSide}>
                            <div className={s.formNavi}>
                                <button className={
                                    buyOrSell==="buy" ? 
                                    s.buyButton + ' ' + s.buyOrSellPressed :
                                    s.buyButton
                                } onClick={() => {setBuyOrSell("buy" )} }>Купить</button>
                                <button className={
                                    buyOrSell==="sell" ? 
                                    s.sellButton + ' ' + s.buyOrSellPressed :
                                    s.sellButton
                                } onClick={() => {setBuyOrSell("sell" )} }>Продать</button>
                            </div>
                            <div className={s.formBody}>
                                {buyOrSell === "buy" ? <BuyStock ticker={ticker}/> : <SellStock ticker={ticker}/>}
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
        

    
}

export default FetchStockData;