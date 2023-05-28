import React from "react";
import ButtonModal from "./ButtonModal";

function Modal(props){ // props children pour passer directement du jsx apartir du parent dans le comp
	
	return(
		
		<div className="modal-style">
			<ButtonModal {...props}/> {/* on fais un spread (...) de nos props pour les amener tous en meme temp au lieu de les déclarer une par une*/}
		</div>
		
	)
}

export default Modal