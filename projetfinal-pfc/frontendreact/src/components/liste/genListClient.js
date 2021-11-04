import React from 'react'
import {Link} from 'react-router-dom'


class GenListeClient extends React.Component{
    

    render() {
        return(
            <tr>
                <td style={{ color:"blue"}}> {this.props.client.nom} </td>
                <td >{this.props.client.prenom}</td>
                <td>{this.props.client.birthday}</td>
                {/* <td>{this.props.client.email}</td> */}
                {/* <td>{this.props.client.telephone}</td> */}
                <td>{this.props.client.nomCity}</td>
                <td>{this.props.client.dateDepart}</td>
                <td>{this.props.client.jour}</td>
                <td>{this.props.client.moyen}</td>
                <td>{this.props.client.class}</td>
                <td>{this.props.client.nomHotel}</td>
                <td>{this.props.client.chambre}</td>
                <td>
                    <Link to={"/editClient/" + this.props.client._id}>EDITER</Link> | 
                    <a href="#" onClick={()=> {this.props.deleteUtil(this.props.client._id) }}> SUPPRIMER </a>
                    
                </td>
            </tr>
            )
    }
}
export default GenListeClient;