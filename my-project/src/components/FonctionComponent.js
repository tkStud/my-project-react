import { useState , useEffect } from 'react'

function FonctionComponent(props){									
																												 
	const [state,setState] = useState(props.value)
	useEffect(()=>{
		console.log('composant monté')
		return ()=>{
			console.log('composant va être démonté')
}
},[])
useEffect(()=>{
	console.log('composant mis à jour')
	setState(props.value)
},[props.value])

return <h1>{state}</h1>
}

export default FonctionComponent

/*Ici vous utilisez deux fois le hook useEffect() 
		de React pour gérer les effets de montée, 
		de mise à jour et de démontage du composant. 
		Le premier useEffect() est appelé lors de la montée du composant 
		et ne dépend d’aucune variable, car il doit être exécuté une seule fois. 
		Il affiche le message « composant monté » dans la console et 
		renvoie une fonction de nettoyage qui sera exécutée lors du démontage du composant 
		et affichera le message « composant va être démonté » 
		dans la console.
	Le deuxième hook useEffect() est appelé à chaque mise à jour du composant et dépend 
	de la propriété value passée au composant en tant que 
	props. À chaque mise à jour, il affiche le message « composant mis à jour » dans la
	console et met également à jour l’état state en 
	utilisant la valeur actuelle de la propriété value passée au composant en tant que props.*/