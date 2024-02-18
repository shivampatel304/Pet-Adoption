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

// receiving all the information
exports.findAllDetails = async(req,res) => {
    try{
        const pet = await InfoModel.find();
        res.status(200).json(pet);
    }catch(error){
        res.status(404).json({
            message: error.message
        });
    }
}

// update the pet information using the id
exports.update = async(req,res) => {
    if(!req.body){
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    await InfoModel.findByIdAndUpdate(id, req.body,{
        useFindAndModify: false}).then(data => {
            if(!data){
                res.status(404).send({
                    message: 'Pet not found.'
                });
            }else{
                res.send({message: "Pet updated successfully."})
            }
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};


// Delete a pet with the id
exports.destroy = async (req, res) => {
    await InfoModel.findByIdAndDelete(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `Pet not found.`
          });
        } else {
          res.send({
            message: "Pet deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};