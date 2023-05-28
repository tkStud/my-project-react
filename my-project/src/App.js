import { useState } from "react";
import ButtonBase from "./components/ButtonBase";
import Header from "./components/Header";


function App() {
  const [count, setCount] = useState(10) // on créer un état pour notre compteur

  //on créer une fonction pour modifier notre état dans le fichier parent qu'on passe en props  à comp button car sinon cela creer des problème
  const handleChange = (mode) => {
    if (mode === '+'){
      setCount(count + 10)
      return; // rappel js: on peut se passer de else car si le if n'est pas vrai alors ce sera le reste du code qui sera executer implicitement
    }
    setCount(count - 10)
  }
  
  return (
    <>
      <Header/>
      <div className="div-bu">
        <ButtonBase
          val ='+'
          classProps='class-bu'
          handle ={() => handleChange('+')} /*notre prop handle est = a handleChangeavec en paramètre '+' pour établire a quel moment ce passe la l'incrémentation */
        />
         <ButtonBase
          val ='-'
          classProps='class-bu'
          handle={( )=> handleChange('-')}
      />
      {count}
      </div>
    </>
  );
}

export default App;
