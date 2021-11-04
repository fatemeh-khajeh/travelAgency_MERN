import Axios from 'axios';
import React from 'react';

class EditClient extends React.Component{
    constructor(props){  
        super(props);
            this.state = {
                id:'',
                nom:'',
                prenom:'',
                birthday:'',
                // email:'',
                // telephone:'',
                nomCity:'',
                jour:'',
                moyen:'',
                class:'',
                nomHotel:'',
                chambre:'',
                clients:[],
                // transportations:[],
                hotels:[],
                destinations:[],
                recu:'',
            }

   
            this.onChangeNom = this.onChangeNom.bind(this);
            this.onChangePrenom = this.onChangePrenom.bind(this);
            this.onChangeBirthday = this.onChangeBirthday.bind(this);
            // this.onChangeTelephone = this.onChangeTelephone.bind(this);
            // this.onChangeEmail = this.onChangeEmail.bind(this);
            this.onChangeDateDepart = this.onChangeDateDepart.bind(this);
            this.onChangeJour = this.onChangeJour.bind(this);
            this.onChangeMoyen = this.onChangeMoyen.bind(this);
            this.onChangeClass = this.onChangeClass.bind(this);
            this.onChangeChambre = this.onChangeChambre.bind(this);
            this.onChangeMyHotel = this.onChangeMyHotel.bind(this);
            this.onChangeMyCity = this.onChangeMyCity.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
    

    }
    componentDidMount(){
        console.log(this.props.match.params.id); 
        //Axios.get('http://localhost:3116/oneClient/'+this.props.match.params.id)
        Axios.get('http://10.30.40.121:3531/oneClient/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    recuHotel:response.data.nomHotel,
                    recuCity:response.data.nomCity,
                    nom: response.data.nom,
                    prenom: response.data.prenom,
                    birthday: response.data.birthday,
                    dateDepart: response.data.dateDepart,
                    jour: response.data.jour,
                    moyen: response.data.moyen,
                    class: response.data.class,
                    chambre: response.data.chambre,
                    // nomHotel: response.data.nomHotel,
                    // nomCity: response.data.nomCity,
                    id: this.props.match.params.id
                })
            })
            .catch((error)=>{
                console.log(error);
            })
            console.log(this.state.code);
//////////////////////////////////////////////////////////////
            //Axios.get('http://localhost:3116/hotels')
            Axios.get('http://10.30.40.121:3531/hotels')
                .then(reponse => {
                console.log(reponse.data);
                if (reponse.data.length > 0 )
                {
                    this.setState ({
                    hotels:reponse.data.map(nomHotel => nomHotel.nomHotel), 
                    })
                    console.log(this.state.hotels);
                }
                }).catch((error) => {
                console.log(error);
                })
//////////////////////////////////////////////////////////////
            //Axios.get('http://localhost:3116/cities')
            Axios.get('http://10.30.40.121:3531/cities')
                .then(reponse => {
                console.log(reponse.data);
                if (reponse.data.length > 0 )
                {
                    this.setState ({
                    destinations:reponse.data.map(nomCity => nomCity.nomCity), 
                    })
                    console.log(this.state.destinations);
                }
                }).catch((error) => {
                console.log(error);
                })    



    }

    onChangeNom(e){
        this.setState({ 
            nom:e.target.value 
        })
    }

    onChangePrenom(e){
        this.setState({ 
            prenom:e.target.value
        })
    }

    onChangeBirthday(e){
        this.setState({ 
            birthday:e.target.value 
        })
    }
    // onChangeTelephone(e){
    //     this.setState({ 
    //         telephone:e.target.value 
    //     })
    // }
    // onChangeEmail(e){
    //     this.setState({ 
    //         email:e.target.value 
    //     })
    // }
    onChangeDateDepart(e){
        this.setState({ 
            dateDepart:e.target.value 
        })
    }
    onChangeJour(e){
        this.setState({ 
            jour:e.target.value 
        })
    }
    onChangeMoyen(e){
        this.setState({ 
            moyen:e.target.value 
        })
    }

    onChangeClass(e){
        this.setState({ 
            class:e.target.value 
        })
    }
    onChangeChambre(e){
        this.setState({ 
            chambre:e.target.value 
        })
    }

    onChangeMyHotel(e){
        this.setState({ 
            myHotel:e.target.value 
        })
    }

    onChangeMyCity(e){
        this.setState({ 
            myCity:e.target.value 
        })
    }

    onSubmit(e){
        e.preventDefault();
        const util={
            nom: this.state.nom,
            prenom: this.state.prenom,
            birthday: this.state.birthday,
            // telephone: this.state.telephone,
            // email: this.state.email,
            dateDepart: this.state.dateDepart,
            jour: this.state.jour,
            moyen: this.state.moyen,
            class: this.state.class,
            chambre : this.state.chambre,
            nomHotel: this.state.myHotel,
            nomCity: this.state.myCity,
        }
        console.log(util);
        //Axios.put('http://localhost:3116/updateClient/'+this.props.match.params.id, util)
        Axios.put('http://10.30.40.121:3531/updateClient/'+this.props.match.params.id, util)
        .then(res=>
            console.log(res.data),
            window.location.replace("/listeClient")
            );
        
        this.setState({
            nom:'',
            prenom:'',
            birthday:'',
            // telephone:'',
            // email:'',
            dateDepart:'',
            jour:'',
            moyen:'', 
            class:'',
            chambre:'',
            // nomHotel:'',
            // nomCity:'',
            
        })

    }

  
    render() {
        return(
            <div className="container">
                <h3>Editer un Client</h3>
                <form onSubmit={this.onSubmit}>

                <div className="form-group">
                        <label>NOM : </label>
                        <input type="text" required className="form-control"  value={this.state.nom} onChange={this.onChangeNom} style={{color:'blue', width: "500px"}}/>
                    </div>

                    <div className="form-group">
                        <label>Prenom : </label>
                        <input type="text" required className="form-control" value={this.state.prenom} onChange={this.onChangePrenom} style={{color:'blue', width: "500px"}}/>
                    </div>

                    <div className="form-group">
                        <label>NAISSANCE </label>
                        <input type="date" required className="form-control"  value={this.state.birthday} onChange={this.onChangeBirthday} style={{color:'blue', width: "500px"}}/>
                    </div>

                    {/* <div className="form-group">
                        <label>TÉLÉPHONE </label>
                        <input type="text" required className="form-control" value={this.state.telephone} onChange={this.onChangeTelephone} style={{color:'blue', width: "500px"}}/>
                    </div> */}

                    {/* <div className="form-group">
                        <label>EMAIL</label>
                        <input type="text" required className="form-control" value={this.state.email} onChange={this.onChangeEmail} style={{color:'blue', width: "500px"}}/>
                    </div> */}

                    <div className="form-group">
                        <label>Destination :</label>
                        <select required className="form-control" value={this.state.myCity}  onChange={this.onChangeMyCity} style={{color:'blue', width: "500px"}}>
                        <option>{this.state.recuCity}</option>
                        {    
                            this.state.destinations.map(function(nomCity){
                                return  <option
                                    key={nomCity}
                                    value={nomCity}>{nomCity}
                                </option>;
                            })
                        }
                        </select>
                    </div>

                    <div className="form-group">
                        <label>DATE de DEPART</label>
                        <input type="date" required className="form-control" value={this.state.dateDepart} onChange={this.onChangeDateDepart} style={{color:'blue', width: "500px"}}/>
                    </div>
                    <div className="form-group">
                        <label>NOMBRE de JOUR</label>
                        <input type="number" required className="form-control" value={this.state.jour} onChange={this.onChangeJour} style={{color:'blue', width: "500px"}}/>
                    </div>

                    <div className="form-group">
                        <label>MOYEN DE TRANSPORT</label>
                        <select required className="form-control" value={this.state.moyen}  onChange={this.onChangeMoyen} style={{color:'blue', width: "500px"}}>
                        <option> {"Selectioner le moyen de Transportation"}</option>
                        <option> {"AVION"}</option>
                        <option> {"TRAIN"} </option>
                        {/* <input type="text" required className="form-control"  value={this.state.moyen} onChange={this.onChangeMoyen} style={{color:'blue', width: "500px"} }/> */}
                    </select>
                        {/* <select required className="form-control" value={this.state.moyen}  onChange={this.onChangeMoyen}>
                        <option>{this.state.titre1}</option>
                        {    
                            this.state.transportations.map(function(moyen){
                                return  <option
                                    key={moyen}
                                    value={moyen}>{moyen}
                                </option>;
                            })
                        }
                        </select> */}
                    </div>   

                    <div className="form-group">
                        <label style={{fontWeight:'bold'}}>Class </label>
                        <select required className="form-control" value={this.state.class}  onChange={this.onChangeClass} style={{color:'blue', width: "500px"} }>
                        <option> {"Selectioner la class de Transportation"}</option>
                            <option>{"économique"} </option>
                            <option> {"classe affaire"} </option>
                    </select>
                    </div>  


                    <div className="form-group">
                        <label>Nome de l'hotel :</label>
                        <select required className="form-control" value={this.state.myHotel}  onChange={this.onChangeMyHotel} style={{color:'blue', width: "500px"}}>
                        <option>{this.state.recuHotel}</option>
                        {    
                            this.state.hotels.map(function(nomHotel){
                                return  <option
                                    key={nomHotel}
                                    value={nomHotel}>{nomHotel}
                                </option>;
                            })
                        }
                        </select>
                    </div>

                    <div className="form-group">
                        <label style={{fontWeight:'bold'}}>Chambre </label>
                        <select required className="form-control" value={this.state.chambre}  onChange={this.onChangeChambre} style={{color:'blue', width: "500px"} }>
                        <option> {"Selectioner le type de chambre"}</option>
                            <option>{"1 lit double"} </option>
                            <option> {"2 lits double"} </option>
                            <option>{"1 lit Reine"} </option>
                            <option> {"2 lits Reine"} </option>
                            <option>{"1 lit Roi"} </option>
                            <option> {"2 lits Roi"} </option>
                    </select>
                    </div>               

                    <div className="form-group">
                        <input type="submit" value="EDIT" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
            )
    }
}
export default EditClient;