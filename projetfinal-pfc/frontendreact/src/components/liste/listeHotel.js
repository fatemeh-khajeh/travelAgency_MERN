import React from 'react'
import Axios from 'axios'
import GenListeHotel from './genListHotel';


class ListeHotel extends React.Component{
   
    constructor(props){
        super(props);
       
            this.state = {hotels:[]}
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

    hotelList(){
        return this.state.hotels.map(utilCourant => {
        return <GenListeHotel hotel={utilCourant} />;
        })
    }

    render() {
        return(
            <div className="container">
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
export default ListeHotel;