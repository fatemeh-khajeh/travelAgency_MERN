import Axios from 'axios'
import React from 'react'

class AjoutDestination extends React.Component{
    constructor(props){  
        super(props);
            this.state = {
                nomCity:'',
                description:'',
            }

    // En React une liaison est nécessaire afin de permettre l'utilisation de `this` dans chaque fonction de rappel !
    this.onChangeNomCity = this.onChangeNomCity.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }
  
    onChangeNomCity(e){
        this.setState({ 
            nomCity:e.target.value 
        })
    }

    onChangeDescription(e){
        this.setState({ 
            description:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const util={
            nomCity: this.state.nomCity,
            description: this.state.description
        }
        console.log(util);
        //Axios.post('http://localhost:3116/newCity', util)
        Axios.post('http://10.30.40.121:3531/newCity', util)
        .then(res=>
            console.log(res.data),
            window.location.replace("/listeDestinationAdmin")
            );
        
        this.setState({
            nomCity:'',
            description:''
        })
    }
    
    onSubmitBack(e){ 
        e.preventDefault();
                    window.location.replace("/homeAdmin")
    }

    render() {
        return(
            <div className="container">
                <form onSubmit={this.onSubmitBack}>
                        <label>Revenir à la page d'accueil de l'administrateur </label>      

                    <div className="form-group">
                        <input type="submit" value="Entrer" className="btn btn-primary"/>
                    </div>
                </form>
                <p>**************</p>
                <h3>Ajouter une Destination</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label style={{fontWeight:'bold'}}>Nom de Ville: </label>
                        <input type="text" required className="form-control"  value={this.state.nomCity} onChange={this.onChangeNomCity} style={{color:'blue', width: "500px"} }/>
                    </div>

                    <div className="form-group">
                        <label style={{fontWeight:'bold'}}>Description : </label>
                        <input type="text" required className="form-control" value={this.state.description} onChange={this.onChangeDescription} style={{color:'blue', width: "500px"} }/>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Ajout Destination" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
            )
    }
}
export default AjoutDestination;