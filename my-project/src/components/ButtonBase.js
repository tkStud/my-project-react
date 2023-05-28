import React from "react"

//on créer 3 props avec objet {} en utilisant la déstructuration
function ButtonBase({val, classProps,handle}){
	
	return(
		<button
		type="button"
		className={classProps}
		onClick={handle} // on utilise la propriété onclick et passe {handle} en prop

		>
			{val}
		</button>
	)
}

export default ButtonBase