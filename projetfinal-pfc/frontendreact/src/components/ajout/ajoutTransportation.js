import Axios from 'axios'
import React from 'react'

class AjoutTransportation extends React.Component{
    constructor(props){  
        super(props);
            this.state = {
                moyen:'',
                class:'',
                age:'',
                prix:'',
            }

    // En React une liaison est nécessaire afin de permettre l'utilisation de `this` dans chaque fonction de rappel !
    this.onChangeMoyen = this.onChangeMoyen.bind(this);
    this.onChangeClass = this.onChangeClass.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangePrix = this.onChangePrix.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }
  
    onChangeMoyen(e){
        this.setState({ 
            moyen:e.target.value 
        })
    }

    onChangeClass(e){
        this.setState({ 
            class:e.target.value
        })
    }

    onChangeAge(e){
        this.setState({ 
            age:e.target.value 
        })
    }

    onChangePrix(e){
        this.setState({ 
            prix:e.target.value 
        })
    }


    onSubmit(e){
        e.preventDefault();
        const util={
            moyen: this.state.moyen,
            class: this.state.class,
            age: this.state.age,
            prix: this.state.prix,
        }
        console.log(util);
        // Axios.post('http://localhost:3116/newTransportation', util)
        Axios.post('http://10.30.40.121:3531/newTransportation', util)
        .then(res=>
            console.log(res.data),
            window.location.replace("/listeTransportationAdmin")
            );
        
        this.setState({
            moyen: '',
            class:'',
            age: '',
            prix: '',
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
                <h3>Ajouter un moyen de transport</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label style={{fontWeight:'bold'}}>Moyen de Transport: </label>

                        <select required className="form-control" value={this.state.moyen}  onChange={this.onChangeMoyen} style={{color:'blue', width: "500px"} }>
                        <option> {"Selectioner le moyen de Transportation"}</option>
                        <option>{"AVION"}</option>
                        <option> {"TRAIN"} </option>
                        {/* <input type="text" required className="form-control"  value={this.state.moyen} onChange={this.onChangeMoyen} style={{color:'blue', width: "500px"} }/> */}
                    </select>
                    </div>

                    <div className="form-group">
                        <label style={{fontWeight:'bold'}}>Class </label>
                        <select required className="form-control" value={this.state.class}  onChange={this.onChangeClass} style={{color:'blue', width: "500px"} }>
                        <option> {"Selectioner la class de Transportation"}</option>
                            <option>{"économique"} </option>
                            <option> {"classe affaire"} </option>
                    </select>
                        {/* <input type="text" required className="form-control" value={this.state.class} onChange={this.onChangeClass} style={{color:'blue', width: "500px"} }/> */}
                    </div>

                    <div className="form-group">
                        <label style={{fontWeight:'bold'}}>Age de voyageur</label>
                        <select required className="form-control" value={this.state.age}  onChange={this.onChangeAge} style={{color:'blue', width: "500px"} }>
                        <option> {"Selectioner l'age de voyageur"}</option>
                            <option> {"enfant(-17)"} </option>
                            <option> {"adult(+17)"} </option>
                         </select>
                        {/* <input type="text" required className="form-control" value={this.state.age} onChange={this.onChangeAge} style={{color:'blue', width: "500px"} }/> */}
                    </div>

                    <div className="form-group">
                        <label style={{fontWeight:'bold'}}>PRIX </label>
                        <input type="text" required className="form-control" value={this.state.prix} onChange={this.onChangePrix} style={{color:'blue', width: "500px"} }/>
                    </div>


                    <div className="form-group">
                        <input type="submit" value="Ajout Transportation" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
            )
    }
}
export default AjoutTransportation;