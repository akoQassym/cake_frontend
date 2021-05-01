import React from "react";
import Title from "../SectionFour/Title";
import Content from "./Content";
import s from "./MainFile.module.css"

const SectionFour = () =>{
    return(
        <container className={s.structure}>
            <Title/>
            <Content/>
        </container>
    )
}

export default SectionFour