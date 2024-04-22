const Bar = require('../model/Bar.js');
const Bierre = require('../models/Biere.js')

const barController = {};

// Récupère tous les bars
barController.getBars = (req, res) => {
    Bar.findAll()
    .then((bar) => res.json(bar));
};

// Récupère les caractréristique d'un bar en prenant son id en paramètre
barController.getBarProfil = (req, res) => {
  Bar.findByPk(parseInt(req.param.id_bar))
  .then((bar) => res.json(bar));
};

// Crée un bar
barController.addBar = (req, res) => {
    const bar = {
        name: req.param.name,
        tel: req.param.tel,        
        email: req.param.email,        
        descritpion: req.param.descritpion
      };
      Bar.create(bar)
        .then((bar) => {
          res.send(bar);
        })
        .catch((err) => {
          res.send(err);
        });
};

// Modifie un bar en prenant en paramètre son id
barController.editbar = (req, res) => {
    const bar = {
        name: req.param.name,
        tel: req.param.tel,        
        email: req.param.email,        
        descritpion: req.param.descritpion
      };
    
      Bar.update(bar, { where: { id: req.params.id_bar } })
        .then((bar) => res.json(bar))
        .catch((err) => {
          res.send(err);
        });
};

// Supprime un bar en prenant en paramètre son id
barController.deleteBar = (req, res) => {
    Bar.destroy({ where: { id: req.params.id_bar } }).then(() =>
      res.send('Bar deleted')
    );
};

// Récupère toutes les bières d'un bar
barController.getAllBeersFromBar = (req, res) => {

};

// Ajoute une bière dans un bar
barController.addBeerIntoBar = (req,res) => {
  Bierre.findAll({where : {barid : req.param.id_bar}} )
}

module.exports = barController;
