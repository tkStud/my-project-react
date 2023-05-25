import {useEffect,useState} from "react";
import axios from 'axios'

function AdviceComponent() {
	//on créer un état pour stocké note advice
	const [advice , setAdvice] = useState('')
	//on créer  une variable pour stocké notre api avec l'id 7
	const apiURL = 'https://api.adviceslip.com/advice/7'
	// on utilise un hook pour que l'action soit faite juste avant le montage qui prend deux argument une fonction anonyme et un tableau vide dans ce cas précis
	useEffect(() =>{
		const fetchData = () => {
			// Effectue une requête GET à l'URL de l'AP
			axios.get(apiURL)
			.then(response=>{
				// Récupère le conseil à partir de la réponse et le stocke dans l'état advice
				setAdvice(response.data.slip.advice)
			})
			//gestion d'erreur
			.catch(error=>{
				// catch renvoi l'erreur exemple probleme de réseau 
				console.error(error) // la methode .error renvoi une erreur dans la console et en argument on met l'erreur récuperer par catch 
			})
		}
		fetchData()
	},[])//le tableau gère a gerer les dépendance dans ce cas la le tableau vide veut dire que le hook ne sera monté qu'un seul fois. mais on pourrait préciser quand ou le nombre de fois avec des dépense qui peuve etre des variable propriété composant et autre.. 
	
	return (
		<div>
				<p>{advice}</p>
		</div>
	)
}

export default AdviceComponent