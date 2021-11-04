const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const mongoose = require('mongoose');
const connection = mongoose.connection;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
const City = require('./models/modelCity');
const Transportation = require('./models/modelTransportation.js');
const Hotel = require('./models/modelHotel.js');
const CLIENT = require('./models/modelClient.js');
const ADMIN = require('./models/modelAdmin.js')

//  app.listen(3116,()=>{
//     console.log("connected to port 3116");
app.listen(3531,()=>{
     console.log("connected to port 3531");
   //mongoose.connect('mongodb://localhost:27017/dbvoyage') ,({useUnifiedTopology:true, useNewUrlParser:true });
   mongoose.connect('mongodb+srv://fkhajeh:fkhajeh@clusterfatemeh.bme0i.mongodb.net/projetPfcVoyageDb?retryWrites=true&w=majority',({ useUnifiedTopology: true, useNewUrlParser: true } )); // baraye estefade dar MongoAtlas 
}); 

connection.once('open',()=>{
    console.log("Connected to MongoDB");
});

//*************************************************************************VILLE */
app.post('/newcity', (req,res) => {
    console.log('req.body', req.body);
    const myCity = new City(req.body);
    myCity.save((err, myCity) =>{
        if (err) {
        return res.status(500).json(err);
    }
    res.status(201).json(myCity);
    });
});


app.get('/cities',(req,res)=>{
    City.find()   
        .exec()
        .then(ville => res.status(200).json(ville));
    
});

app.delete('/delCity/:id', (req,res)=>{
    const id = req.params.id;
    City.findByIdAndDelete(id,(err,ville)=>{
        if(err){
            return res.status(500).json(err);
        }
        res.status(202).json({ msg:`la ville avec l'id ${ville._id} suprimee`});
    });
});
//****************************************************************************TRANSPORTATION

app.post('/newTransportation', (req,res) => {
    console.log('req.body', req.body);
    const myTransportation = new Transportation(req.body);
    myTransportation.save((err, myTransportation) =>{
        if (err) {
        return res.status(500).json(err);
    }
    res.status(201).json(myTransportation);
    });
});


app.get('/transportations',(req,res)=>{
    Transportation.find()   
        .exec()
        .then(moyen => res.status(200).json(moyen));
    
});

app.delete('/delTransportation/:id', (req,res)=>{
    const id = req.params.id;
    Transportation.findByIdAndDelete(id,(err,moyen)=>{
        if(err){
            return res.status(500).json(err);
        }
        res.status(202).json({ msg:`le moyen de transportation avec l'id ${moyen._id} suprimee`});
    });
});

//************************************************************************ HOTEL */

app.post('/newHotel', (req,res) => {
    console.log('req.body', req.body);
    const myHotel = new Hotel(req.body);
    myHotel.save((err, myHotel) =>{
        if (err) {
        return res.status(500).json(err);
    }
    res.status(201).json(myHotel);
    });
});


app.get('/hotels',(req,res)=>{
    Hotel.find()   
        .exec()
        .then(hotel => res.status(200).json(hotel));
    
});

app.delete('/delHotel/:id', (req,res)=>{
    const id = req.params.id;
    Hotel.findByIdAndDelete(id,(err,hotel)=>{
        if(err){
            return res.status(500).json(err);
        }
        res.status(202).json({ msg:`l'hotel avec l'id ${hotel._id} suprimee`});
    });
});


app.put('/updateHotel/:id', (req, res) => { 
    const id = req.params.id;
    Hotel.findByIdAndUpdate(id,req.body,(err,hotel)=>{
        if(err){
            return res.status(500).json(err);
        }
        res.status(202).json({ msg:` l'hotel avec l'id ${hotel._id} mis a jour`});
    });
});

app.get('/oneHotel/:id',(req,res)=>{
    const id =req.params.id;
    Hotel.findById(id,(err,hotel)=>{
        if(err){
            return res.status(500).json(err);
        }
    })   
        .exec()
        .then(hotel => res.status(200).json(hotel));
    
});

//************************************************************************************* CLIENT */

app.get('/oneClient/:id',(req,res)=>{
    const id =req.params.id;
    CLIENT.findById(id,(err,client)=>{
        if(err){
            return res.status(500).json(err);
        }
    })   
        .exec()
        .then(user => res.status(200).json(user));
 });



app.post('/newClient', (req,res) => {
    console.log('req.body', req.body);
    const myClient = new CLIENT(req.body);
    myClient.save((err, myClient) =>{
        if (err) {
        return res.status(500).json(err);
    }
    res.status(201).json(myClient);
    });
});


app.get('/clients',(req,res)=>{
    CLIENT.find()   
        .exec()
        .then(client => res.status(200).json(client));
    
});

app.delete('/delClient/:id', (req,res)=>{
    const id = req.params.id;
    CLIENT.findByIdAndDelete(id,(err,client)=>{
        if(err){
            return res.status(500).json(err);
        }
        res.status(202).json({ msg:`le client avec l'id ${client._id} suprimee`});
    });
});


app.put('/updateClient/:id', (req, res) => { 
    const id = req.params.id;
    CLIENT.findByIdAndUpdate(id,req.body,(err,client)=>{
        if(err){
            return res.status(500).json(err);
        }
        res.status(202).json({ msg:` le client avec l'id ${client._id} mis a jour`});
    });
});

//***************************************** admin register and Login 


app.post('/newAdmin', (req,res) => {
    console.log('req.body', req.body);
    const myAdmin = new ADMIN(req.body);
    myAdmin.save((err, myAdmin) =>{
        if (err) {
        return res.status(500).json(err);
    }
    res.status(201).json(myAdmin);
    });
});

app.get('/admins',(req,res)=>{

    ADMIN.find()   
        .exec()
        .then(dep => res.status(200).json(dep));
    
});

app.get('/admins/:username/admins/:password', (req, res)=>{
    const myusername =req.params.username;
    const mypassword =req.params.password;
    ADMIN.find({username:myusername, password:mypassword}, (err,user)=>{
        if(err){
            return res.status(500).json(err);
        }
    })   
        .exec()
        .then(user => res.status(200).json(user));
    
});


