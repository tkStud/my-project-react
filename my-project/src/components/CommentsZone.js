
import { useState } from "react";
import CommentInput from "./CommentInpute";

const CommentsZone = (props) => {
	const [showCommentInput , setShowCommentInput] = useState(false) // on a mis un boolean pour notre state initial 'false'
	const [buttonName, setButtonName] = useState(props.initialButtonName) // on a mis une props pour le nom initial du bouton qui va changer par la suite
	
	
	//fonction pour mettre a jour nos states
	const commentsButton = () => {
			setShowCommentInput(true) 
			setButtonName('send')
		}
	return(
		<div>
			{showCommentInput && <CommentInput />} {/*alors c'est une forme de condition pour le jsx l'état de showCommentInput(true ou false) conditionne l'affichage du composant commentinput*/}
			<button className="buttonComment" onClick={commentsButton}  >{buttonName}</button>/ {/*evenement de click le boutton change de nom et showCommentinoput passe a 'true'*/}
		</div>
	)
}

export default CommentsZone
