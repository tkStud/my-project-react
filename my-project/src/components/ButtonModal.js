import React from "react";

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

export default ButtonModal