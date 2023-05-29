import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import FonctionComponent from './components/FonctionComponent';



function App() {

  const [state,setState] = useState(0)
	const incrState = ()=>{
		setState(prevState => prevState + 1)
}
  
  return (
    <>
      <Header/>
      
      

      {state < 10 ? <FonctionComponent value={state}/> : <span>Composant démonté</span>}
		  <button onClick={incrState}> Cliquez-moi ! </button>
      
  
    
    </>
  );
}

export default App;
