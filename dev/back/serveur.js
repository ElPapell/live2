const Mongoose = require('mongoose');
let express = require('express'),
    app = express();

let fs = require('fs'),
    path = require('path'),
    async = require('async'); 
let bodyParser = require ('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//connexion à la BDD local sur la collection "projet"
Mongoose.connect("mongodb://mongodb:27017/projet");

//Création de la table Pizza
const PizzaModel = Mongoose.model('pizza', {
	nom: String,
	description: String,
	motCles: String,
	tempsLivraison: Number
}, 'pizza')

//Appel d'une méthode GET pour observé si un appel basique fonctionne
app.get('/version', function (req,res){
    res.status(200).json({yes:"we can"})
});

//Appel d'une méthode GET qui montre le menu de la pizzeria avec les toutes les infos (nom,description,...) 
app.get("/pizza", async (request, reponse) => {
	try{
		var result = await PizzaModel.find().exec();
		reponse.send(result);
	}catch(error){
		reponse.status(500).send(error);
	}
})

//Appel d'une méthode POST qui récupère les commandes de l'utilisateur
app.post('/save', function (req,res){

	var myData = new PizzaModel(req.body);
		console.log(myData);
		myData.save()
		.then(item => {
			res.send("Nouvelle pizza sauvegardé dans la base");
		})
		.catch(err => {
			res.status(400).send("impossible d'enregistrer" + err);
		});

});

// Appel GET d'écoute sur le port 3000
app.listen(3000,function(){
   console.info('HTTP on port 3000')
})

//Appel d'une méthode POST qui récupère les commandes de l'utilisateur
app.post('/commande', function (req,res){

	var myData = new PizzaModel();
	myData.name = req.body.nomPizza

	for( let i = 0; i< PizzaModel.find().count() ; i++){
		if(myData.name = PizzaModel.find().get(i).name){
			console.log("Commande enregistré")
			res.send("ok");
			break ;
		}
	}

	res.send("pas ok")
});

//Appel méthode GET qui récupère l'id de la pizza
app.get("/pizza/:nom", async (req, reponse) => {
    try{
        var result = await PizzaModel.find(req.params.type);
        reponse.send(result);
    }catch(error){
        reponse.status(500).send(error);
    }
});