import React from "react";
import s from "./Title.module.css"

const Title = () =>{
    return(
        <container>
            <p className={s.Header}>Инвестируйте в акции 24/7</p>
            <p className={s.About}>У нас вы можете стать инвестором <span className={s.MediumWeight}>любой компании</span>, покупать акции на Американской, Московской, Шанхайской и других биржах мира</p>
        </container>
    )
}

export default Title