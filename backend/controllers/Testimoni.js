const TestiModel = require('../model/testimoni');

// creating a new testimoni
exports.create = async (req,res) => {
    const newTesti = new TestiModel(req.body);
    await newTesti.save().then(data => {
        res.send({
            message: "New Testimoni is added successfully !!",
            newTesti: data 
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error while adding new testimonial"
        });
    });
};

// receiving all testimonial
exports.findAllDetails = async(req,res) => {
    try{
        const testi = await TestiModel.find();
        res.status(200).json(testi);
    }catch(err){
        res.status(404).json({
            message: err.message
        });
    }
}
