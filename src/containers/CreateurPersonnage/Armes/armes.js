import React from "react";
import Arme from "./Arme/arme";
import imgArc from "../../../assets/img/armes/arc.png"
import imgEpee from "../../../assets/img/armes/epee.png"
import imgFleau from "../../../assets/img/armes/fleau.png"
import imgHache from "../../../assets/img/armes/hache.png"

const armes = (props) => (
    <div className="row no-gutters text-center">
        {props.listeArmes.map(arme => {
            let imgArme;
            switch(arme){
                case "arc" : imgArme = imgArc;
                break;
                case "epee" : imgArme = imgEpee;
                break;
                case "fleau" : imgArme = imgFleau;
                break;
                case "hache" : imgArme = imgHache;
                break;
            }
            return (
                <div className="row-3" key={arme}>
                    <Arme key={arme} imageArme={imgArme}>{arme}</Arme>
                </div>
            )
        })}
    </div>
);

export default armes;