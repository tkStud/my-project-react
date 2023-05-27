import {useEffect,useState} from "react";
import axios from 'axios'

function CompagniesComponent() {
	
	const [compagnies , setcompagnies] = useState([])
	
	
	// on utilise un hook pour que l'action soit faite juste avant le montage qui prend deux argument une fonction anonyme et un tableau vide dans ce cas précis
	const apiURL = 'https://recherche-entreprises.api.gouv.fr/search?q=Studi';	//notre url de la compagnie 
	useEffect(() => {
		
			
				const fetchData =  () => {
					axios.get(apiURL)
				.then(response => {
					console.log(response.data); // Vérifier la structure des données renvoyées
					setcompagnies(response.data.results); // après avoir vé"rifier la structure renvoyé (j'aurais peut etre pu trouvé dans la doc de l'api) je sais que les adress sont dans "results"
				})
				.catch(error => {
					console.error(error);
				});
				}
	
	
		fetchData();
	}, []);

	return (
		<div>
			{/*une condition ternaire pour voir si ma réponse est vide ou pas*/} 
			{compagnies.length > 0 ? (
				compagnies.map(item => ( // on itère sur notre state companies pour récurer nos valeur (item comme dab pour notre clé)
					item.matching_etablissements.map(etablissement => (// on itère a nous avec map cette fois ci sur item.matching.. pour récupérer le contenant de (etablissment comme dab la clé)
						<>
						<p key={etablissement.adresse}>{etablissement.adresse}</p> {/* on établi la clé et récupere la valeur qui nous interesse renvoyer par map*/}
						<p key={etablissement.date_creation}>{etablissement.date_creation}</p>
						</>
					))
				))
			) : (
				<p>Aucune adresse disponible</p> // si la condition ternaire n'est pas rempli
			)}
	</div>
	)
}

export default CompagniesComponent