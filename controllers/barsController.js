const Bar = require('../model/Bar.js');

const getBars = (req, res) => {
    Bar.findAll()
    .then((bar) => res.json(bar));
};

const getBarProfil = (req, res) => {

};

const addBar = (req, res) => {
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

const editbar = (req, res) => {
    const bar = {
        name: req.param.name,
        tel: req.param.tel,        
        email: req.param.email,        
        descritpion: req.param.descritpion
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
};


module.exports = { getBars, getBarProfil, addBar, editbar, deleteBar, getAllBeersFromBar};
