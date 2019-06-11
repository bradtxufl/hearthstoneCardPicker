const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    if (!req.session.deck) {
      req.session.deck = [];
    }
    knex.select().from('cards').then((result) => {
    res.render("form.ejs", {cards: result, deck: req.session.deck});
  });
  },

  create: function(req, res) {
    knex('cards').insert({
      mana: req.body.mana,
      attack: req.body.attack,
      health: req.body.health,
      description: req.body.description
    }).then(function(result) {
      console.log(result)
      res.redirect('/');
    })
  },

  add: function (req, res) {
    knex('cards').where('id', req.params.id).then((result)=>{
      req.session.deck.push(result[0])
    }).then(function() {
      res.redirect('/');
    })
  },

  remove: function (req,res) {
    for (var i = 0; i < req.session.deck.length; i++) {
      if (req.session.deck[i].id == req.params.id) {
        req.session.deck.splice(i, 1);
        res.redirect('/')
      }
    }
  }

}
