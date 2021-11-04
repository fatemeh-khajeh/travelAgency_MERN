import React from 'react'


class GenListeTransportation extends React.Component{
    

    render() {
        return(
            <tr style={{textAlign:"center", fontSize:20}}>
                <td style={{textAlign:"center", fontSize:20 , fontWeight:"bold"}}>{this.props.transportation.moyen}</td>
                <td>{this.props.transportation.class}</td>
                <td>{this.props.transportation.age}</td>
                <td>{this.props.transportation.prix}</td>
            </tr>
            )
    }
}
export default GenListeTransportation;