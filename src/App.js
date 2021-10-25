
import './App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Hambur from './components/Hambur';
import Hamburg from './components/Hamburg';
import Hamburgu from './components/Hamburgu';
import Lomito from './components/Lomito';
import Lomitos from './components/Lomitos';
import Pizza from './components/Pizza';
import Pizzap from './components/Pizzap';
import Pizzapi from './components/Pizzapi';
import Navegacion from './components/Navegacion';

function App() {
  return (
   <Router>

     <div className="container">
       <h1 className="text-center mt-3 mb-3">"Todo Caserito"</h1>
     </div>
     <Route path="/Hambur" component={Hambur}/>
     <Route path="/Hamburg" component={Hamburg}/>
     <Route path="/Hamburgu" component={Hamburgu}/>
     <Route path="/Lomito" component={Lomito}/>
     <Route path="/Lomitos" component={Lomitos}/>
     <Route path="/Pizza" component={Pizza}/>
     <Route path="/Pizzap" component={Pizzap}/>
     <Route path="/Pizzapi" component={Pizzapi}/>


    <Navegacion/>

   </Router>
  );
}

export default App;
