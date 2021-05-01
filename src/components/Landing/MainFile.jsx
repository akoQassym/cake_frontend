import React from "react";
import s from "./MainFile.module.css"
import Navbar from "./Navbar/MainFile";
import SectionOne from "./SectionOne/MainFile";
import SectionTwo from "./SectionTwo/MainFile";
import SectionThree from "./SectionThree/MainFile";
import SectionFour from "./SectionFour/MainFile";
import SectionFive from "./SectionFive/MainFile";
import SectionSix from "./SectionSix/MainFile";
import SectionSeven from "./SectionSeven/MainFile";
import Footer from "./Footer/MainFile";

const Landing = () => {
  return (
    <container className={s.structure}>
      <div className={s.Navbar}><Navbar/></div>
      <div className={s.One}><SectionOne/></div>
      <div className={s.Two}><SectionTwo/></div>
      <div className={s.Three}><SectionThree/></div>
      <div className={s.Four}><SectionFour/></div>
      <div className={s.Five}><SectionFive/></div>
      <div className={s.Six}><SectionSix/></div>
      <div className={s.Seven}><SectionSeven/></div>
      <div className={s.Eight}><Footer/></div>
    </container>
  );
};

export default Landing;
