import React from "react";
import classes from "./titreH1.module.css";

const titreH1 = (props) =>{
    const classesCss = `${classes.font_family} border border-dark bg-primary text-center text-white rounded `;
    return (
        <h1 className={classesCss}>{props.children}</h1>
    );
};

export default titreH1;