import React from "react";
import classes from "./imagePerso.module.css";
import ImagePerso1 from "../../../../assets/img/persos/squid1.png";
import ImagePerso2 from "../../../../assets/img/persos/squid2.png";
import ImagePerso3 from "../../../../assets/img/persos/squid3.png";

const imagePerso = (props) =>{
    let imageToPrint="";
    if(props.numImage === 1) imageToPrint = ImagePerso1;
    else if(props.numImage === 2) imageToPrint = ImagePerso2;
    else if(props.numImage === 3) imageToPrint = ImagePerso3;

    return(
        <div className="row no-gutters text-center align-items-center">
            <div className={["col-1",classes.fleche,classes.gauche].join(' ')} onClick={props.flecheGauche}></div>
            <div className="col">
                <img src={imageToPrint} alt="perso" height="60px"/>
            </div>
            <div className={["col-1",classes.fleche,classes.droite].join(' ')} onClick={props.flecheDroite}></div>
        </div>
    )
};

export default imagePerso;