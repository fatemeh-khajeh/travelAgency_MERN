
import React from 'react'

class HomeAdmin extends React.Component{
    constructor(props){  
        super(props);
            this.state = {
               
            }

    // En React une liaison est nécessaire afin de permettre l'utilisation de `this` dans chaque fonction de rappel !
    
    this.onSubmitAjoutDestination = this.onSubmitAjoutDestination.bind(this);
    this.onSubmitAjoutHotel = this.onSubmitAjoutHotel.bind(this);
    this.onSubmitListeClient = this.onSubmitListeClient.bind(this);
    }

    componentDidMount(){
        
    }
     

    onSubmitAjoutDestination(e){   
        e.preventDefault();
        window.location.replace("/ajoutDestination")
    }

    onSubmitAjoutHotel(e){
        e.preventDefault();
        window.location.replace("/ajoutHotel")
    }

    onSubmitAjoutTransportation(e){
        e.preventDefault();
        window.location.replace("/ajoutTransportation")
    }
    onSubmitListeClient(e){
        e.preventDefault();
        window.location.replace("/listeClient")
    }
    onSubmitListeHotel(e){
        e.preventDefault();
        window.location.replace("/listeHotelAdmin")
    }
    

    render() {
        return(
            <div className="container">
                <h3>Bienvenue cher Administrateur</h3>
                <h4>Qu'est-ce que tu veux faire?</h4>
                <form onSubmit={this.onSubmitAjoutHotel}>
                              
                    <div className="form-group">
                    <label>Ajouter un Hotel:  <input type="submit" value="Entrer" className="btn btn-primary"/>
                    </label>
                    </div>
                    
                </form>
                <p>********************************************************</p>

                <form onSubmit={this.onSubmitAjoutDestination}>   

                    <div className="form-group">
                    <label>Ajouter une destination :  <input type="submit" value="Entrer" className="btn btn-primary"/>
                    </label>  
                    </div>
                </form>
                <p>********************************************************</p>

                <form onSubmit={this.onSubmitAjoutTransportation}>
                    <div className="form-group">
                    <label>Ajouter une Transportation : <input type="submit" value="Entrer" className="btn btn-primary"/>
                    </label>
                    </div>
                </form>
                    <p>********************************************************</p>

                <form onSubmit={this.onSubmitListeClient}>       
                    <div className="form-group">
                    <label>Liste/Editer/Supprimer de Clients : <input type="submit" value="Entrer" className="btn btn-primary"/>
                    </label>
                    </div>
                </form>  
                 <p>********************************************************</p>

                {/* <form onSubmit={this.onSubmitListeHotel}>       
                    <div className="form-group">
                    <label>Liste/Editer/Supprimer de Hotel : <input type="submit" value="Entrer" className="btn btn-primary"/>
                    </label>
                    </div>
                </form>      */}
            </div>
        )
    }
}
export default HomeAdmin;