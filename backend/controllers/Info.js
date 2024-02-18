const InfoModel = require('../model/info')

// creating new pet

exports.create = async( req, res) => {
    const newPet = new InfoModel(req.body);
    await newPet.save().then(data => {
        res.send({
            message: "New Pet is added successfully!!",
            newPet: data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "some error while adding new pet"
        });
    });
};


// app.post('/newPet', async(req,res) => {
//     try {
//         console.log("inside newPet");
//         const newPet = new InfoModel(req.body);
//         const savedPet = await newPet.save();
//         res.status(201).json(savedPet);
//     } catch(error){
//         console.error(error);
//         res.status(500).json({error: 'Internal Server Error'});
//     }
// });

// app.get('/', (req, res) => {
//     res.send('Hi');
// });



// module.exports =  app;