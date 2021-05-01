import React from "react";
import Navbar from "./Navbar";
import s from "./MainFile.module.css"

const SectionOne = () => {
  return (
      <container className={s.structure}>
          <Navbar/>
      </container>
  )
};

export default SectionOne;