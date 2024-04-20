import React, { Component } from "react";
import TitreH1 from "../../components/Titres/titreH1";
import Bouton from "../../components/Bouton/bouton";
import Personnage from "./Personnage/personnage";
import Armes from "./Armes/armes";

class CreateurPersonnage extends Component {
    state = {
        personnage : {
            image : 1,
            force : 3,
            agilite : 2,
            intelligence : 0,
            arme: null,
        },
        nbPointsDisponibles : 7,
        armes : ["epee", "fleau", "arc", "hache"]

    }      
    handleImagePrecedente = () => {
        this.setState(oldState => {
            const newPersonnage = {...oldState.personnage};
            if (oldState.personnage.image <= 1) newPersonnage.image = 3;
            else newPersonnage.image--;
            return {personnage:newPersonnage};
        })
    }
    handleImageSuivante = () => {
        this.setState(oldState => {
            const newPersonnage = {...oldState.personnage};
            if (oldState.personnage.image >= 3) newPersonnage.image = 1;
            else newPersonnage.image++;
            return {personnage:newPersonnage};
        })
    }
    handleEnleverPoint = (carac) => {
        this.setState((oldState,props) => {
            if (oldState.personnage[carac] <= 0) return null
            const newPointCarac = oldState.personnage[carac] - 1;
            const newPerso = {...oldState.personnage};
            const newNbPointsDisponible = oldState.nbPointsDisponibles + 1;
            newPerso[carac] = newPointCarac;
            return {
                personnage:newPerso,
                nbPointsDisponibles : newNbPointsDisponible
            }
        })
    }
    handleAjouterPoint = (carac) => {
        this.setState((oldState,props) => {
            if (oldState.personnage[carac] >= 5 || oldState.nbPointsDisponibles <= 0) return null
            const newPointCarac = oldState.personnage[carac] + 1;
            const newPerso = {...oldState.personnage};
            const newNbPointsDisponible = oldState.nbPointsDisponibles - 1;
            newPerso[carac] = newPointCarac;
            return {
                personnage:newPerso,
                nbPointsDisponibles : newNbPointsDisponible
            }
        })
    }
    handleChangeArmePersonnage = (arme) =>{
        const newPerso = {...this.state.personnage};
        newPerso.arme = arme;
        this.setState({personnage:newPerso});
    }
  render() {
    return (
      <div className="container">
        <TitreH1>CreateurPersonnage</TitreH1>
        <Personnage {...this.state.personnage} 
                    precedente={this.handleImagePrecedente} 
                    suivante={this.handleImageSuivante} 
                    nbPointsDisponibles={this.state.nbPointsDisponibles}
                    enleverPoint={this.handleEnleverPoint}
                    ajouterPoint={this.handleAjouterPoint}                    
        />
        <Armes listeArmes={this.state.armes} changeArme = {this.handleChangeArmePersonnage} 
                currentArme={this.state.personnage.arme}
        />
        <div className="row no-gutters">
          <Bouton typeBtn="btn-danger" css="col-6">
            Reinitialiser
          </Bouton>
          <Bouton typeBtn="btn-success" css="col-6">
            Creer
          </Bouton>
        </div>
      </div>
    );
  }
}

export default CreateurPersonnage;