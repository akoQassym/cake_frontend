import React from "react";
import ContentOne from "./Content";
import s from "./MainFile.module.css"

const SectionOne = () => {
  return (
      <container className={s.structure}>
          <ContentOne/>
      </container>
  )
};

export default SectionOne;
