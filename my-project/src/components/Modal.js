import React from "react";

function Modal({children}){ // props children pour passer directement du jsx apartir du parent dans le comp
	
	return(
	<div className='modal-style'>
		{children} 
	</div>
	)
}

export default Modal