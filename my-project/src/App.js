import Header from "./components/Header";
import Modal from "./components/Modal";


function App() {

  const hClick = () =>{
    console.log('clicked')
  }
  
  return (
    <>
    <Header/>
     {/*On utilise nos props de buttonModal dans l'élément app c'est a dire le grand-parent pour rappel app => Modal => ButtonModal  */}
    <Modal
      label='lorem ipsum...'
      type="button"
      handleClick={hClick}
      background='blue'
      color='white'
    />

    </>
  );
}

export default App;
