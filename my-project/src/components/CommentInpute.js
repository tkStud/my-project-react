import React ,{useState} from "react";
import DataComment from "./DataComment";

const CommentInput = () => {
	const [inputValue,setInputValue] = useState('')

	const handleChange = (event) => { //'rappel js' armengument event 
	setInputValue(event.target.value) //'rappel js' event récuperer la valeur de la cible en l'occurence le prompt d'un textaera
	
	}
	return (
	<>	
	<textarea className="commentInput" type="text" rows="4" value={inputValue} onChange={handleChange}/> {/*attribut html pour evement de transmettre une valeur*/}
	<DataComment
		newComment = {inputValue}	
	/>
	</>
	)
}

export default CommentInput