import { useState } from "react";

import Header from "./components/Header";
import Modal from "./components/Modal";


function App() {

  
  return (
    <>
    <Header/>
    <Modal> {/*On a besoin des deux balise du composant modal pour mettre directement du jsx grace a la props children*/}
      <div>
        <h2>titre modale</h2>
        <p>je vais vous dire peut etre moins à l'époque etc.....</p>
      </div>
    </Modal>
    </>
  );
}

export default App;
