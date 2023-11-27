## Initialisation d'un projet mongoDB

 1- génère le package.json
  
 $ npm init -y 

2- installe les nodes_modules

 $ npm i express mongoose nodemon  

3- Dans le package.json ajouter la ligne suivante pour permettre la mise à jour automatique du server : 


"scripts": {
    "dev": "nodemon",
}
