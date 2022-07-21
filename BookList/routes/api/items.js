const express = require('express');
const router = express.Router();

//Products Model
const Item = (require('../../models/Item'));
//@route GET api/items
//@desc GET All items
//@access Public

router.get('/',(req, res)=>{
    Item.find()
    .then(items=>res.json(items));
});

//@route POST api/items
//@desc Add new Item
//@access Public

router.post('/',(req, res)=>{
    const newItem = new Item({
        ISBN:req.body.ISBN,
        Title:req.body.Title,
        Author:req.body.Author,
        Copies:req.body.Copies,
    })
    newItem.save().then(item=>res.json(item));
});

//@route DELETE api/items?:id
//@desc Delete an item
//@access Public

router.delete('/:_id',(req, res)=>{
    Item.findById(req.params._id)
    .then(item=>item.remove().then(()=>res.json({success:true})))
    .catch(err=>res.status(404).json({success:false}));
});


module.exports = router;