import React from 'react'


class GenListeDestination extends React.Component{
    

    render() {
        return(
            <tr>
                <td style={{ color:"blue"} }>{this.props.city.nomCity}</td>
                <td>{this.props.city.description}</td>
            </tr>
            )
    }
}
export default GenListeDestination;