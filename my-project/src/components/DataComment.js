import React from "react";


const DataComment = (props) => {
	

	return (
		
		<div>
			<textarea value={props.newComment} readOnly /> {/*readonly attribut html pour lecture seul dans un input textaera et selection*/}
		</div>
	)
}

export default DataComment