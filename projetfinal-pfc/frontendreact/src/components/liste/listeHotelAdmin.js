import React from 'react'
import Axios from 'axios'
import GenListeHotelAdmin from './genListHotelAdmin';


class ListeHotelAdmin extends React.Component{
   
    constructor(props){
        super(props);
            this.state = {hotels:[]}
            this.deleteUtil=this.deleteUtil.bind(this);
    }
    componentDidMount(){
    
    //Axios.get('http://localhost:3116/hotels')
    Axios.get('http://10.30.40.121:3531/hotels')
        .then(response=>{
            console.log(response.data);
            if(response.data.length>0){
                this.setState({
                    hotels:response.data
                })
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    deleteUtil(id){
        //Axios.delete('http://localhost:3116/delHotel/'+id)
        Axios.delete('http://10.30.40.121:3531/delHotel/'+id)
        .then(res=>console.log(res.data));
        this.setState({
            hotels:this.state.hotels.filter(el => el._id !==id)
        })
    }

    hotelList(){
        return this.state.hotels.map(utilCourant => {
            return <GenListeHotelAdmin hotel={utilCourant}/>
        // return <GenListeHotelAdmin hotel={utilCourant} deleteUtil={this.deleteUtil} key={utilCourant._id}/>;
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
                
                <h3>Liste des Hotels</h3>
                <table className="table">
                    <thead className="thead-light" style={{textAlign:"center", }}>
                        <tr>
                            <th style={{ color:"orange"}}>NOME DE l'HOTEL</th>
                            <th style={{ color: "orange"}}>ÉTOILES (CLIENTÈLE)</th>
                            <th style={{ color:"orange"}}>ADRESSE</th>
                            <th style={{ color: "orange"}}>TÉLÉPHONE</th>
                            <th style={{ color: "orange"}}>CHAMBRE</th>
                            <th style={{ color: "orange"}}>PRIX</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.hotelList()}  
                    </tbody>  
                </table> 

            </div>
            )
    }
}
export default ListeHotelAdmin;