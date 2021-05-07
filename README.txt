LANCER LE DOCKER-COMPOSE
docker-compose -f docker-compose-dev.yml up



COMPILER LE DOCKERFILE
docker build -t ...


BASE MONGO
Etape 1 : taper la commande "mongo" pour se connecter mongoDB
Etape 2 : taper la commande "use projet" dans le terminal pour créer le répertoire projet
Etape 3 : taper les commandes  pour insérer les données suivante dans la table pizza:
    db.pizza.save({ nom:"4 fromage", description:"chèvre, mozza, cantal", motCles:"test", tempsLivraison: 4 })
    db.pizza.save({ nom:"Spécial", description:"jambon, lardon, poulet", motCles:"test3", tempsLivraison: 8 }) 



INSTALLER LES PACKAGE NECESSAIRE
npm install express
npm install mongoose