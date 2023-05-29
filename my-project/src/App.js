import Header from "./components/Header";
import Button from "./components/Button";

import styled from "styled-components/macro";

const Button2 = ({className,label}) =>{
  return <button className={className}>{label}</button>
}

const StyledButton = styled(Button2)` //  on peut stylisé directement un composant
  background-color: #f1f1f1;
  color: #333;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin:auto;

  &:hover {
    background-color: #ddd;
  }
`;


function App() {

 
  
  return (
    <>
      <Header/>
      <Button/>
    
      <div>
      <h3>Exemple d'utilisation de Styled Components</h3>
      <StyledButton label="Mon bouton stylisé" />
      </div>
  
    </>
  );
}

export default App;
