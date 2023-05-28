import React from 'react'
import PropTypes from 'prop-types';


function ButtonModal({label,handleClick,background,color}){ // on créer nos props 

	return(
		<button
			type="button"
			onClick={handleClick} 
			style={{background,color}} //ici on fait du style inline dans la props il y a un objet avec nos propriété css
			
		>
			{label}

		</button>
	)
}
//protype a désactiver en mode production
ButtonModal.propTypes = {
	label:PropTypes.string.isRequired // vérifie le type et la présence de valeur pour label 
}

export default ButtonModal