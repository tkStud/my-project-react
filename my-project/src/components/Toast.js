import React from "react";
import styled from "styled-components/macro";

function Toast(){
	const color = 'red' // on creer une variable color
	const theme ='light'
	return (
		
		<>
		<Wrapper color={color}> {/* on passe sous forme de props color dans Toast  */}
			message bien executer
		</Wrapper>
		<Modal theme={theme}>
			Lorem ipsum
		</Modal>
		</>

	)
}

/*On creer un composant qui va juste contenir notre style et qui va passer toutes ces props "on pourrait dire un composant transparent", 
avec la fonction styled qui viens de styled-component.. qui est basé sur div (wrapper correspond donc à une div) ensuite on ouvre des
backticks (``)
*/
const Wrapper = styled.div`
position:fixed;
bottom:2rem;
left:50%;
transform: translateX(-50%); 
/*on viens interpolé une valeur pour changer notre couleur et sa doit forcement etre une fonction anonyme qui prend en paramètre des props */
background:  ${props => props.color}; 
border-radius: 4px;
height:3rem;
padding:1rem 4rem;
font-weight:bold;
`
const Modal = styled.div`
width: 500px;
height:350px;
margin-left:50%;
transform: translateX(-50%); 
border-radius:6px;
background:${props =>props.theme === 'light' ? 'darkgrey' : 'lightblue'}; // utilisation de condition ternaire pour gerer le style de la modal
color:${props =>props.theme === 'light' ? 'black' : 'darkgrey'};
font-weight:bold;

`
export default Toast