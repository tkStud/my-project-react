import React, { useState } from "react"; 


const Formule = (props) => {


	const [choose , setChoose] = useState("you did not choose the formula") // création d'un état choose valeur , setchoose fonction pour mettre a jour l'état usestate('valeur initial')

	//fonction pour mettre a jour le state 
	const chooseFormule = (choose) =>{ // on met un argument en l'occurence ce sera formule plus bas 
		setChoose(`you have choose a formula ${choose.name} - price: ${choose.price}$`) // on récupère nom et le prix de notre pizza
	}

	const generateButtons = () =>{
		// return car on va renvoyer des element jsx avec une fonctions de rappel qui se trouve en parametree de map (des boutons)
		// props.formulcorrespond a notre fausse base de donner donc notre tableeau fakedate passer en props
		//les arguent de la fonction de rappel: formule est une variable qui stocké chaque élément de notre tableau lors de l'itération (nos pizza et prix) et index va nous servir d'indix de la meme facon que i dans dans une boucle for
		return props.formul.map((formule, index) =>(   // ici on utilise des parenthèse on peut le faire dans avec map on aurais peut utiliser des accolade 
			<button className="button-formula" key={index} onClick={() => chooseFormule (formule)}> {/*un bouton est créer a chaque itération key sert à react pour identifié chaque element qui va etre afficher dans la vue lors d'un itération  oneclick nous sert d'evenement pour renvoyer la fonction chooseFormule pour afficher la formule correspondante a notre boutton*/}
				{index + 1}{/*on ajoute 1 a l'index pourque notre bouton affiche 1 au lieu de 0 et ainsi de suite*/}
			</button>
		))
	}

	return(
		<>
		<div className ='choose-formula'> 
		{generateButtons()} 
		</div>
		
		<label className ='label-formula'>{choose}</label>
    </>	
	)
}

export default Formule