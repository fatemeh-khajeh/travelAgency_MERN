import React from 'react'
import Axios from 'axios'
import GenListeDestination from './genListDestination';


class ListeDestination extends React.Component{
   
    constructor(props){
        super(props);
       
            this.state = {cities:[]}
    }
    componentDidMount(){
    
    //Axios.get('http://localhost:3116/cities')
    Axios.get('http://10.30.40.121:3531/cities')
        .then(response=>{
            console.log(response.data);
            if(response.data.length>0){
                this.setState({
                    cities:response.data
                })
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    cityList(){
        return this.state.cities.map(utilCourant => {
        return <GenListeDestination city={utilCourant} />;
        })
    }

    render() {
        return(
            <div className="container">
                <h3>Liste des Destinations</h3>
                <table className="table">
                    <thead className="thead-light" style={{textAlign:"center", }}>
                        <tr>
                            <th style={{ color:"orange"}}>VILLE</th>
                            <th style={{ color: "orange"}}>DESCRIPTION</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.cityList()}  
                    </tbody>  
                </table> 

            </div>
            )
    }
}
export default ListeDestination;