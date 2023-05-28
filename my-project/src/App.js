import Header from "./components/Header";
import Modal from "./components/Modal";
import { Button } from '@mui/material' // on importe notre composant du package mui/material de la bibliotèque mui
import DeleteIcon from '@mui/icons-material/Delete';// import le composant DeleteIcone du package icon-material.. qui vient de la la bibliotèque mui



function App() {

  const hClick = () =>{
    console.log('clicked')
  }
  
  return (
    <>
      <Header/>
      <Modal
      label={3}
      type="button"
      handleClick={hClick}
      background='blue'
      color='white'
      />
      <Button  variant="outlined" startIcon={<DeleteIcon />}>Delete</Button> {/*On peut utiliser notre boutton et notre icone */}
    </>
  );
}

export default App;
