import React from 'react'
import Axios from 'axios'
import GenListeTransportation from './genListTransportation';


class ListeTransportation extends React.Component{
   
    constructor(props){
        super(props);
       
            this.state = {transportations:[]}
    }
    componentDidMount(){
    
    //Axios.get('http://localhost:3116/transportations')
    Axios.get('http://10.30.40.121:3531/transportations')
        .then(response=>{
            console.log(response.data);
            if(response.data.length>0){
                this.setState({
                    transportations:response.data
                })
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    transportationList(){
        return this.state.transportations.map(utilCourant => {
        return <GenListeTransportation transportation={utilCourant} />;
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

                <h3>Liste des Moyen de Transport</h3>
                <table className="table">
                    <thead className="thead-light" style={{textAlign:"center"}}>
                        <tr >
                            <th style={{ color:"orange"}}>MOYEN de TRANSPORT</th>
                            <th style={{ color: "orange"}}>CLASS</th>
                            <th style={{ color:"orange"}}>AGE</th>
                            <th style={{ color: "orange"}}>PRIX</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.transportationList()}  
                    </tbody>  
                </table> 

            </div>
            )
    }
}
export default ListeTransportation;