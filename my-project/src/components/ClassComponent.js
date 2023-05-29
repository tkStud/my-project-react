import React from 'react'

export default class ClassComponent extends React.Component{

	constructor(props){
		super(props) // permet a la classe parente de faire toute les initialisation de ses fonctionnalité avant de les passer a la classe enfant donc celle la
		
		console.log('constructor')
}

componentDidMount(){
	console.log('composant monté')
	
}

componentDidUpdate(prevProps){
	console.log('composant mis à jour')
	console.log(prevProps) // donne la props avant la mise ajour

}

componentWillUnmount(){
	console.log('composant va être démonté')
	
}
	
	render(){
		return (
<h1>{this.props.value}</h1> // quand on passe une props avec les comp de classe il faut ajouter le context donc this
)
}
}