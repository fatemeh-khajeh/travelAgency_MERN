import Axios from 'axios'
import React from 'react'

class LoginAdmin extends React.Component{
    constructor(props){  
        super(props);
            this.state = {
                username:'',
                password:'',
            }

    // En React une liaison est nécessaire afin de permettre l'utilisation de `this` dans chaque fonction de rappel !
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        
    }
 
    
    onChangeUsername(e){
        this.setState({ 
            username:e.target.value
        })
    }

    onChangePassword(e){
        this.setState({ 
            password:e.target.value 
        })
    }
// ************************** login .
    onSubmit(e){
        e.preventDefault();
            const username= this.state.username;
           const password= this.state.password;
        //Axios.get('http://localhost:3116/admins/'+ username+'/admins/'+password, )
        Axios.get('http://10.30.40.121:3531/admins/'+ username+'/admins/'+password, )
        .then(res=> {
            if(res.data.length>0){
                    window.location.replace("/homeAdmin")
                }
            else{
                    alert("Le nom d'utilisateur ou le mot de passe n'est pas correct")
                }
            })    
        .catch((error)=>{
            console.log(error);
        })
    }
    

    render() {
        return(
            <div className="container">
                <h3>login Admin</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nom d'utilisateur : </label>
                        <input type="text" required className="form-control" value={this.state.username} onChange={this.onChangeUsername}/>
                    </div>
                    <div className="form-group">
                        <label>Mot de passe : </label>
                        <input type="password" required className="form-control"  value={this.state.password} onChange={this.onChangePassword}/>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
            )
    }
}
export default LoginAdmin;