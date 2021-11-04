import Axios from 'axios'
import React from 'react'

class AjoutHotel extends React.Component{
    constructor(props){  
        super(props);
            this.state = {
                nom:'',
                etoile:'',
                adresse:'',
                telephone:'',
                chambre:'',
                prix:'',
            }

    // En React une liaison est nécessaire afin de permettre l'utilisation de `this` dans chaque fonction de rappel !
    this.onChangeNomHotel = this.onChangeNomHotel.bind(this);
    this.onChangeEtoile = this.onChangeEtoile.bind(this);
    this.onChangeAdresse = this.onChangeAdresse.bind(this);
    this.onChangeTelephone = this.onChangeTelephone.bind(this);
    this.onChangeChambre = this.onChangeChambre.bind(this);
    this.onChangePrix = this.onChangePrix.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }
  
    onChangeNomHotel(e){
        this.setState({ 
            nomHotel:e.target.value 
        })
    }

    onChangeEtoile(e){
        this.setState({ 
            etoile:e.target.value
        })
    }

    onChangeAdresse(e){
        this.setState({ 
            adresse:e.target.value 
        })
    }


    onChangeTelephone(e){
        this.setState({ 
            telephone:e.target.value
        })
    }

    onChangeChambre(e){
        this.setState({ 
            chambre:e.target.value 
        })
    }
    onChangePrix(e){
        this.setState({ 
            prix:e.target.value 
        })
    }


    onSubmit(e){
        e.preventDefault();
        const util={
            nomHotel: this.state.nomHotel,
            etoile: this.state.etoile,
            adresse: this.state.adresse,
            telephone: this.state.telephone,
            chambre: this.state.chambre,
            prix: this.state.prix,
        }
        console.log(util);
        //Axios.post('http://localhost:3116/newHotel', util)
        Axios.post('http://10.30.40.121:3531/newHotel', util)
        .then(res=>
            console.log(res.data),
            window.location.replace("/listeHotelAdmin")
            );
        
        this.setState({
            nomHotel: '',
            etoile:'',
            adresse: '',
            telephone: '',
            chambre: '',
            prix: '',
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
                <h3>Ajouter un Hotel</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label style={{fontWeight:'bold'}}>Nom de l'HOTEL: </label>
                        <input type="text" required className="form-control"  value={this.state.nomHotel} onChange={this.onChangeNomHotel} style={{color:'blue', width: "500px"} }/>
                    </div>

                    <div className="form-group">
                        <label style={{fontWeight:'bold'}}>ÉTOILES (CLIENTÈLE) </label>
                        <input type="text" required className="form-control" value={this.state.etoile} onChange={this.onChangeEtoile} style={{color:'blue', width: "500px"} }/>
                    </div>

                    <div className="form-group">
                        <label style={{fontWeight:'bold'}}>ADRESSE </label>
                        <input type="text" required className="form-control" value={this.state.adresse} onChange={this.onChangeAdresse} style={{color:'blue', width: "500px"}}/>
                    </div>

                    <div className="form-group">
                        <label style={{fontWeight:'bold'}}>TÉLÉPHONE</label>
                        <input type="text" required className="form-control" value={this.state.telephone} onChange={this.onChangeTelephone} style={{color:'blue', width: "500px"} }/>
                    </div>

                    <div className="form-group">
                        <label style={{fontWeight:'bold'}}>Chambre </label>
                        <select required className="form-control" value={this.state.chambre}  onChange={this.onChangeChambre} style={{color:'blue', width: "500px"} }>
                        <option> {"Selectioner le type de chambre"}</option>
                            <option>{"lit double"} </option>
                            <option> {"grand lit (queen)"} </option>
                            <option>{"très-grand lit (king)"} </option>
                            {/* <option> {"2 lits Reine"} </option>
                            <option>{"1 lit Roi"} </option>
                            <option> {"2 lits Roi"} </option> */}
                    </select>
                    </div>    

                    {/* <div className="form-group">
                        <label style={{fontWeight:'bold'}}>CHAMBRE</label>
                        <input type="text" required className="form-control" value={this.state.chambre} onChange={this.onChangeChambre} style={{color:'blue', width: "500px"} }/>
                    </div> */}

                    <div className="form-group">
                        <label style={{fontWeight:'bold'}}>PRIX </label>
                        <input type="text" required className="form-control" value={this.state.prix} onChange={this.onChangePrix} style={{color:'blue', width: "500px"} }/>
                    </div>


                    <div className="form-group">
                        <input type="submit" value="Ajout Hotel" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
            )
    }
}
export default AjoutHotel;