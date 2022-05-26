const Item = require('../models/Item');

exports.getPortfolio = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).render('index', {
            items
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
          });
    }
  };

exports.addNewItem = async (req, res) => {
    try {
        const item = await Item.create(req.body);
        // console.log(req.body);
        res.redirect('/');
        // res.status(200).render('index');
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
          });
    }
  };

  exports.deleteItem = async (req, res) => {
    try {
        // console.log(req.params.id);
        // console.log("tessst");
        await Item.findByIdAndRemove(req.params.id);
        res.redirect('/');
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
          });
    }
  };

  exports.updateItem = async (req, res) => {
    try {
        // console.log(req.params.id);
        console.log(req.body);
        
        const item = await Item.findOne({id:req.params.id});
        item.title = req.body.title;
        item.description = req.body.description;
        item.image = req.body.image;
        item.save();
        res.redirect('/');
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
          });
    }
  };