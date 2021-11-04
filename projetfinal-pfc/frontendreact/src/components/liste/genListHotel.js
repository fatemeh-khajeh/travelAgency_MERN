import React from 'react'


class GenListeHotel extends React.Component{
    

    render() {
        return(
            <tr>
                <td >{this.props.hotel.nomHotel}</td>
                <td>{this.props.hotel.etoile}</td>
                <td>{this.props.hotel.adresse}</td>
                <td>{this.props.hotel.telephone}</td>
                <td>{this.props.hotel.chambre}</td>
                <td>{this.props.hotel.prix}</td>
            </tr>
            )
    }
}
export default GenListeHotel;