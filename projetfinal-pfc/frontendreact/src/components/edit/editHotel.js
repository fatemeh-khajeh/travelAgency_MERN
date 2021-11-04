import axios from 'axios';
import React from 'react';

class EditHotel extends React.Component{
    constructor(props){  
        super(props);
            this.state = {
                nomHotel:'',
                etoile:'',
                adresse:'',
                telephone:'',
                chambre:'',
                prix:'',
                id:''
            }

    this.onChangeNomHotel = this.onChangeNomHotel.bind(this);
    this.onChangeEtoile = this.onChangeEtoile.bind(this);
    this.onChangeAdresse = this.onChangeAdresse.bind(this);
    this.onChangeTelephone = this.onChangeTelephone.bind(this);
    this.onChangeChambre = this.onChangeChambre.bind(this);
    this.onChangePrix = this.onChangePrix.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    

    }
    componentDidMount(){
        console.log(this.props.match.params.id); 
        //axios.get('http://localhost:3116/oneHotel/'+this.props.match.params.id)
        axios.get('http://10.30.40.121:3531/oneHotel/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    nomHotel: response.data.nomHotel,
                    etoile: response.data.etoile,
                    adresse: response.data.adresse,
                    telephone: response.data.telephone,
                    chambre: response.data.chambre,
                    prix: response.data.prix,
                    id: this.props.match.params.id
                })
            })
            .catch((error)=>{
                console.log(error);
            })
            // console.log(this.state.nomHotel);
    }
    onChangeNomHotel(e){
        this.setState({ 
            nomHotel:e.target.nomHotel
        })
    }

    onChangeEtoile(e){
        this.setState({ 
            etoile:e.target.etoile
        })
    }

    onChangeAdresse(e){
        this.setState({ 
            adresse:e.target.adresse
        })
    }

    onChangeTelephone(e){
        this.setState({ 
            telephone:e.target.telephone
        })
    }
    onChangeChambre(e){
        this.setState({ 
            chambre:e.target.chambre
        })
    }
    onChangePrix(e){
        this.setState({ 
            prix:e.target.prix        })
    }
    onSubmit(e){
        e.preventDefault();
        console.log("je suis magloire")
        const util={
            nomHotel: this.state.nomHotel,
            etoile: this.state.etoile,
            adresse: this.state.adresse,
            telephone:this.state.telephone,
            chambre:this.state.chambre,
            prix:this.state.prix,
        }
        console.log(util);
        //axios.put('http://localhost:3116/updateHotel/'+this.props.match.params.id, util)
        axios.put('http://10.30.40.121:3531/updateHotel/'+this.props.match.params.id, util)
        .then(res=>console.log(res.data),
        window.location.replace("/listeHotelAdmin")
        );
        this.setState({
            nomHotel:'',
            etoile: '',
            adresse: '',
            telephone:'',
            chambre:'',
            prix:'',
            
            
        })
    }


    render() {
        return(
            <div className="container">
                {/* Edit s'affiche! */}
                <h3>Editer un Hotel</h3>
                <form onSubmit={this.onSubmit}>
                   
                    <div className="form-group">
                        <label>Nom de l'Hotel : </label>
                        <input type="text" required className="form-control"  value={this.state.nomHotel} onChange={this.onChangeNomHotel}/>
                    </div>

                    <div className="form-group">
                        <label>Etoile : </label>
                        <input type="text" required className="form-control" value={this.state.etoile} onChange={this.onChangeEtoile}/>
                    </div>

                    <div className="form-group">
                        <label>Adresse : </label>
                        <input type="text" required className="form-control" value={this.state.adresse} onChange={this.onChangeAdresse}/>
                    </div>

                    <div className="form-group">
                        <label>Telephone : </label>
                        <input type="text" required className="form-control"  value={this.state.telephone} onChange={this.onChangeTelephone}/>
                    </div>

                    <div className="form-group">
                        <label>Chambre : </label>
                        <input type="text" required className="form-control" value={this.state.chambre} onChange={this.onChangeChambre}/>
                    </div>

                    <div className="form-group">
                        <label>Prix : </label>
                        <input type="text" required className="form-control" value={this.state.prix} onChange={this.onChangePrix}/>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Editer" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
            )
    }
}
export default EditHotel;