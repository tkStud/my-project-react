import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import ClassComponent from './components/ClassComponent';



function App() {

  const [state,setState] = useState(0)
	const incrState = ()=>{
		setState(prevState => prevState + 1)
}
  
  return (
    <>
      <Header/>
      
      

      {state < 10 ? <ClassComponent value={state}/> : <span>Composant démonté</span>}
		  <button onClick={incrState}> Cliquez-moi ! </button>
      
  
    
    </>
  );
}

export default App;
