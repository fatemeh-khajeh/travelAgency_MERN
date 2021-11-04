import React from 'react'
import reactlogo from './reactlogo.png'

class Logo extends React.Component{
    render() {
        return(
            <div>
                {/* Logo est charge sous App directement! */}
                <div className="container">
                    <div className="row">
                        <a href="http://fr.reactjs.org/"><img  src={reactlogo} alt="Logo"/></a>
                    </div>
                </div>
            </div>
            
            )
    }
}
export default Logo;