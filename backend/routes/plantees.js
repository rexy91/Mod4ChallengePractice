const express = require('express')
const router = express.Router()

// Import the schema 
const Plantee = require('../model/Plantee')

router.post('/', async (req, res) => {

    console.log('post route hitted!')
    const plantee = new Plantee ({
        name : req.body.name,
        fromUSA : req.body.name,
        born: req.body.born,
        bio: req.body.bio,
        quote: req.body.quote,
        pictureUrl: req.body.pictureUrl,
        twitter: req.body.twitter
    })
    try {
        const newPlantee = await plantee.save()
        // Sends it back if successeed.

        res.status(201).json({newTodo})
    } catch(err){
        res.send(400).json({message: err.message})
    }

})



// export the route 
module.exports = router 