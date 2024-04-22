const Bar = require('../models/Bar.js');
const Bierre = require('../models/Biere.js')

// Récupère tous les bars
const getBars = (req, res) => {
    Bar.findAll()
    .then((bar) => res.json(bar));
};

// Récupère les caractréristique d'un bar en prenant son id en paramètre
const getBarProfil = (req, res) => {
  Bar.findAll({ where: { id: req.params.id_bar } })
    .then((bar) => res.json(bar));
};

// Crée un bar
const addBar = (req, res) => {
 
  const bar = {
    name: req.body.name,
    description: req.body.description,
    tel: req.body.tel,
    email: req.body.email,
    adresse: req.body.adresse,
  };
      
  Bar.create(bar).then((queryResult) => res.json(queryResult));      
};

// Modifie un bar en prenant en paramètre son id
const editbar = (req, res) => {
    const bar = {
        name: req.body.name,
        tel: req.body.tel,        
        email: req.body.email,        
        descritpion: req.body.descritpion
      };
    
      Bar.update(bar, { where: { id: req.params.id_bar } })
        .then((bar) => res.json(bar))
        .catch((err) => {
          res.send(err);
        });
};

// Supprime un bar en prenant en paramètre son id
const deleteBar = (req, res) => {
    Bar.destroy({ where: { id: req.params.id_bar } }).then(() =>
      res.send('Bar deleted')
    );
};

// Récupère toutes les bières d'un bar
const getAllBeersFromBar = (req, res) => {
  barId = req.params.id_bar;

  // Recherche le bar avec l'id correspondant
  Bar.findOne({ where: { id: barId } })
    .then((bar) => {
      if (!bar) {
        return res.status(404).json({ error: 'Bar not found' });
      }      
      // Retourne toutes les bières liée à l'id du bar
      Biere.findAll({ where: { id: barId } })
        .then((beers) => {
          res.json(beers);
        })
      });
};

// Ajoute une bière dans un bar
const addBeerIntoBar = (req,res) => {
  Bierre.findAll({where : {barid : req.param.id_bar}} )
}

module.exports = {getBars,getBarProfil,addBar,deleteBar,getAllBeersFromBar,editbar,addBeerIntoBar};
