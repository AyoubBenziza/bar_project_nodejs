const Bar = require('../models/Bar');
const Biere = require('../models/Biere');

const getBars = (req, res) => {
    Bar.findAll()
    .then((bar) => res.json(bar));
};

const getBarProfil = (req, res) => {
  Product.findAll({ where: { id: req.params.id } })
  .then((products) => res.json(products));
};

const addBar = (req, res) => {
    const bar = {
        name: req.params.name,
        tel: req.params.tel,        
        email: req.params.email,        
        descritpion: req.params.descritpion
      };
      Bar.create(bar)
        .then((bar) => {
          res.send(bar);
        })
        .catch((err) => {
          res.send(err);
        });
};

const editbar = (req, res) => {
    const bar = {
        name: req.params.name,
        tel: req.params.tel,        
        email: req.params.email,        
        descritpion: req.params.descritpion
      };
    
      Bar.update(bar, { where: { id: req.params.id } })
        .then((bar) => res.json(bar))
        .catch((err) => {
          res.send(err);
        });
};

const deleteBar = (req, res) => {
    Bar.destroy({ where: { id: req.params.id } }).then(() =>
      res.send('Bar deleted')
    );
};

const getAllBeersFromBar = (req, res) => {
  const barId = req.params.id;
  bar = findByPk(barId);

  if(!bar){
    res.send(`le bar ${barId} n'existe pas`)
  }

  Biere.findAll({where : {barId}})
  .then((bar) => res.json(bar))
        .catch((err) => {
          res.send(err);
        });
};


module.exports = { getBars, getBarProfil, addBar, editbar, deleteBar, getAllBeersFromBar};
