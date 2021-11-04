import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Navbar from './components/navbar/navbar'
import GenListeDestination from './components/liste/genListDestination'
import ListeDestination from './components/liste/listeDestination'
import AjoutDestination from './components/ajout/ajoutDestination'
import ListeTransportation from './components/liste/listeTransportation'
import GenListeTransportation from './components/liste/genListTransportation'
import AjoutHotel from './components/ajout/ajoutHotel'
import ListeHotel from './components/liste/listeHotel'
import GenListeHotel from './components/liste/genListHotel'
import ListeHotelAdmin from './components/liste/listeHotelAdmin'
import LoginAdmin from './components/loginAdmin/loginAdmin'
import HomeAdmin from './components/home/homeAdmin'
import ListeDestinationAdmin from './components/liste/listeDestinationAdmin'
import AjoutTransportation from './components/ajout/ajoutTransportation'
import ListeTransportationAdmin from './components/liste/listeTransportationAdmin'
import InscriptionClient from './components/ajout/inscriptionClient'
import ListeClient from './components/liste/listeClient'
import GenListeClient from './components/liste/genListClient'
import EditClient from './components/edit/editClient'
import GenListeHotelAdmin from './components/liste/genListHotelAdmin'
import EditHotel from './components/edit/editHotel'

class App extends React.Component{
  render(){
    return (
      <div className="container" >
        
        <Router>
          <Route exact path="/">
            {/* <Redirect to="/liste" /> : <Liste/> */}
          </Route>
         
          <Navbar/>
            <Route path="/listeDestination" component={ListeDestination} />
            <Route path="/genListDestination" component={GenListeDestination} />
            <Route path="/ajoutDestination" component={AjoutDestination} />
            <Route path="/listeTransportation" component={ListeTransportation} />
            <Route path="/genListTransportation" component={GenListeTransportation} />
            <Route path="/loginAdmin" component={LoginAdmin} />
            <Route path="/homeAdmin" component={HomeAdmin} />
            <Route path="/ajoutHotel" component={AjoutHotel} />
            <Route path="/listeDestinationAdmin" component={ListeDestinationAdmin} />
            <Route path="/listeHotelAdmin" component={ListeHotelAdmin} />
            <Route path="/listeHotel" component={ListeHotel} />
            <Route path="/genListHotel" component={GenListeHotel} />
            <Route path="/genListHotelAdmin" component={GenListeHotelAdmin} />
            <Route path="/ajoutTransportation" component={AjoutTransportation} />
            <Route path="/listeTransportationAdmin" component={ListeTransportationAdmin} />
            <Route path="/inscriptionClient" component={InscriptionClient} />
            <Route path="/genListeClient" component={GenListeClient} />
            <Route path="/listeClient" component={ListeClient} />
            <Route path="/editClient/:id" component={EditClient} />
            <Route path="/editHotel/:id" component={EditHotel} />
            
            
            {/* <Route path="/edit/:id" component={Edit} />
            <Route path="/dep" component={Departement} /> */}
        </Router>  
      </div>
    );
  }
}
export default App;
