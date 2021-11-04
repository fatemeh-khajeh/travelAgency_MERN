import React from 'react'
import Axios from 'axios'
import GenListeClient from './genListClient.js';


class ListeClient extends React.Component{
   
    constructor(props){
        super(props);
            this.state = {clients:[]}
            this.deleteUtil=this.deleteUtil.bind(this);
    }
    componentDidMount(){
    
        //Axios.get('http://localhost:3116/clients')
        Axios.get('http://10.30.40.121:3531/clients')
            .then(response=>{
                console.log(response.data);
                if(response.data.length>0){
                    this.setState({
                        clients:response.data
                    })
                }
            })
        .catch((error)=>{
            console.log(error);
        })
    }

    deleteUtil(id){
        //Axios.delete('http://localhost:3116/delClient/'+id)
        Axios.delete('http://10.30.40.121:3531/delClient/'+id)
        .then(res=>console.log(res.data));
        this.setState({
            clients:this.state.clients.filter(el => el._id !==id)
        })
    }

    clientList(){
        return this.state.clients.map(utilCourant => {
            return <GenListeClient client={utilCourant} deleteUtil={this.deleteUtil} key={utilCourant._id}/>;
        // return this.state.clients.map(utilCourant => {
        // return <GenListeClient client={utilCourant} />;
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


                <h3>Liste des Clients</h3>
                <table className="table">
                    <thead className="thead-light" style={{textAlign:"center", }}>
                        <tr>
                            <th style={{ color:"orange"}}>NOM</th>
                            <th style={{ color: "orange"}}>Prenom</th>
                            <th style={{ color: "orange"}}>NAISSANCE</th>
                            {/* <th style={{ color:"orange"}}>EMAIL</th> */}
                            {/* <th style={{ color: "orange"}}>TÉLÉPHONE</th> */}
                            <th style={{ color:"orange"}}>DESTINATION</th>
                            <th style={{ color: "orange"}}>DEPART</th>
                            <th style={{ color:"orange"}}>JOURS</th>
                            <th style={{ color: "orange"}}>MOYEN</th>
                            <th style={{ color:"orange"}}>CLASS</th>
                            <th style={{ color: "orange"}}>HOTEL</th>
                            <th style={{ color:"orange"}}>CHAMBRE</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        {this.clientList()}  
                    </tbody>  
                </table> 

            </div>
            )
    }
}
export default ListeClient;