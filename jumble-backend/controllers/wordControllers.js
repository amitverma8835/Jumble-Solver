const wordSchema = require('../models/words')


exports.uploadWord = async(req,res)=>{
        const {word} = req.body;

        try {
                const uploadWord = await wordSchema.create({
                        word
                })
                res.status(200).json({ msg: "Success" })
        } catch (error) {
                console.log(error)
                res.status(500).json({ message: "Word already exists" })
        }
}
exports.allWords = async (req, res) => {
        try {
            const words = await wordSchema.find({});
            res.json(words);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };