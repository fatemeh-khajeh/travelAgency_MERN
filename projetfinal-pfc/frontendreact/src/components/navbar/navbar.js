import React from 'react'
import{Link} from 'react-router-dom'

class Navbar extends React.Component{
    render() {
        return(
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg navPers">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/" className="navbar-brand">Bienvenue</Link>
                
                <div className=" collapse navbar-collapse"id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                
                <li className="navbar-item active">
                <Link to="/listeDestination" className="nav-link">Liste des Destinations</Link>
                </li>
                
                <li className="navbar-item">
                <Link to="/listeTransportation" className="nav-link">Liste des Moyens de Transport</Link>
                </li>
                <li className="navbar-item">
                <Link to="/listeHotel" className="nav-link">Liste des Hotels</Link>
                </li>
                <li className="navbar-item active">
                <Link to="/inscriptionClient" className="nav-link">Inscription de Client</Link>
                </li>
                <li className="navbar-item">
                <Link to="/loginAdmin" className="nav-link">Login Admin</Link>
                </li>
                
                </ul>
                </div>
                
                </nav>









            // <nav className="navbar navbar-dark bg-dark navbar-expand-lg navPers">
            
            // <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            //     <span className="navbar-toggler-icon"></span>
            // </button>
            // <Link to="/" className="navbar-brand">Bienvenue</Link>
            //     <div className="navbar-collapse">
            //         <ul className="navbar-nav mr-auto">
            //             <li className="navbar-item">
            //             <Link to="/liste" className="nav-link">Utilisateurs</Link>
            //             </li>
            //             <li className="navbar-item">
            //             <Link to="/ajout" className="nav-link">Ajout d'Utilisateurs</Link>
            //             </li>
            //             <li className="navbar-item">
            //             <Link to="/dep" className="nav-link">Ajout de Departement</Link>
            //             </li>
            //         </ul>
            //     </div>
            // </nav> 
            // <div className="container">
            //     NavBar s'affiche!
            // </div>
        )
    }
}
export default Navbar;