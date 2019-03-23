const express = require('express');
const db = require('../models');


const router = express.Router();

router.get('/api/books', (req, res) => {

  db.Book.find({})
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err))

});

router.post('/api/books', (req, res) => {
  
  db.Book.create(req.body)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
});

router.delete('/api/books/:id', (req, res) => {
  
  db.Book.findByIdAndRemove(req.params.id)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));

});

module.exports = router;

