import React from "react";
import {Link}  from "react-router-dom"

const Header = () =>{

	

	return(
		
		<header>
			<h1>Hello Guy!</h1>
			<p>Welcome On Your Favorite Plateform </p>
			<nav>
				<ul>
					<li>
						<Link to='/Page1'> {/*On utilise link qui est un composant de la bibliotèque reactrooterdom pour creer des lien direct vers un url sans recharger toutes la page */}
						<button type='button' >1</button>
						</Link>
					</li>
					<li>
						<Link to='/Page2'>
						<button type='button' >2</button>
						</Link>
					</li>
					<li>
						<Link to='/Page3'>
						<button type='button' >3</button>
						</Link>
					</li>
				
				</ul>
			</nav>
			
		</header>
	)
}

export default Header