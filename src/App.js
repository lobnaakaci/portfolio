
import './App.css';
import NavBar from "./compenents/NavBar.js";

import Footer from './compenents/Footer';
import Apropos from './compenents/Apropos';
import Education from './compenents/Education';
import Experience from './compenents/Experience';
import Contact from './compenents/Contact';
import Projets from './compenents/Projets';
import Lobna from './compenents/Lobna';
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <div className="App">
   <NavBar/>
<Footer/>


   <Routes>

        <Route path='/Apropos' element={<Apropos/>}/>
<Route path ='/Education' element={<Education/>}/>

<Route path='/Experience' element={<Experience/>}/>
<Route path='/Contact' element={<Contact/>}/>
<Route path='/Projets' element={<Projets/>}/>
<Route path='/Lobna' element={<Lobna/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
