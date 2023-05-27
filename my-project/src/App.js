import Header from "./components/Header";
import Page1 from "./views/Page1";
import Page2 from "./views/Page2";
import Page3 from "./views/Page3";
import { BrowserRouter as Router , Routes , Route  } from "react-router-dom";

function App() {
  
  
  return (
    <Router> {/*racine de notre router*/}
      <Header/>
      <Routes> {/*Pour linstend on va dire que c'est notre switch ou on va config toute nos route */}
      <Route path="Page1" Component={Page1}/> {/*on creer chaque route...*/}
      <Route path="Page2" Component={Page2}/>
      <Route path="Page3" Component={Page3}/>
      </Routes>
      
    </Router>
  );
}

export default App;
