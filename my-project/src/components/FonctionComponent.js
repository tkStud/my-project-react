import { useState, useEffect, useMemo } from 'react'

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

const memoValue = useMemo(()=> state + 10, [state])

return (
<>	
<h1>{state}</h1>
<h2>{memoValue}</h2>
</>
)

}

export default FonctionComponent

/*Ici, le hook useMemo est utilisé pour optimiser les performances en évitant de recalculer 
la valeur de memoValue à chaque rendu de composant. useMemo permet de stocker une valeur calculée à l’avance jusqu’à ce qu’une 
dépendance change, auquel cas la valeur est recalculée.

Dans cet exemple, memoValue est calculé en ajoutant 10 à la valeur de state. En utilisant useMemo, 
la valeur de memoValue ne sera recalculée que si la dépendance change. Cela évite de recalculer la valeur de memoValue à chaque fois
 que le composant est rendu.

Cela peut être utile pour des calculs coûteux ou des opérations de transformation de données, où il est souhaitable de ne pas effectuer
 le calcul à chaque rendu du composant.*/