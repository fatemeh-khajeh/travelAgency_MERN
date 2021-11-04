import React from 'react'
import {Link} from 'react-router-dom'

class GenListeHotel extends React.Component{
    

    render() {
        return(
            <tr style={{textAlign:"center", }}>
                <td style={{ color:"blue"}} >{this.props.hotel.nomHotel}</td>
                <td>{this.props.hotel.etoile}</td>
                <td>{this.props.hotel.adresse}</td>
                <td>{this.props.hotel.telephone}</td>
                <td>{this.props.hotel.chambre}</td>
                <td>{this.props.hotel.prix}</td>
                {/* <td>
                    <Link to={"/editHotel/" + this.props.hotel._id}>EDITER</Link> | 
                    <a href="#" onClick={()=> {this.props.deleteUtil(this.props.hotel._id) }}> SUPPRIMER</a>   
                </td> */}
            </tr>
            )
    }
}
export default GenListeHotel;