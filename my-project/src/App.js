import Header from "./components/Header";
import CommentsZone from "./components/CommentsZone";
import Formule from "./components/Formule";


function App() {
  //fausse base de donné
  const fakeData = [
    {name : '1- tartiflète  ' ,price: 12},
    {name : '2- margarita ' ,price: 9},
    {name : '3- oriental  ' ,price: 10},
    {name : '4- buffalo ' ,price: 14}
  ]

  // on utilise map pour parcourir le tableau et renvoyer un element pour chaque index du tableau
  const formattedData = fakeData.map(item => `${item.name}`)
  return (
    <>
      <Header/>

      <div className="menu">{formattedData.join(" ")}</div> {/* on utilise methode join(" ") pour concaténé avec un espace les élément du tableau*/}
      <Formule formul = {fakeData}/> {/*renvoi fakedata pour la prop formul qui pourra etre utiliser dans Formule*/}
      <CommentsZone initialButtonName = {"comment"}/>
      
    </>
  );
}

export default App;
