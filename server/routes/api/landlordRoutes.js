const router = express.Router();
const { Landlord } = require('../../models/Landlord ')

//get all landlords
router.get('/', async (req,res) => {
    const landlord = await Landlord.find();
    res.json(landlord);
});

//get one landlord by id
router.get('/:id', async (req,res) => {
    try{
        const landlord = await Landlord.findOne({ _id: req.params.landlordId})

        if(!landlord){
            return res.status(404).json({ message: 'No landlord found.' })
        }

        res.json({landlord})
    } catch(error) {
            console.log(error);
            return res.status(500).json(error);
        } 
});

//create new landlord
router.post('/', async (req,res) => {
    try {
        const newLandlord = await Landlord.create(req.body);
        res.json(newLandlord);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
})

//updates a landlord
router.put('/', async (req,res) => {
    try{
        const landlord = await Landlord.findOneandUpdate(
            {landlords: req.params.landlordId},
            { $pull: { landlords: req.params.landlordId } },
            { new: true }
        );
         res.status(200).json({ message: `landlord ${landlord.name} successfully updated` })
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

//delete landlord account which deletes from Landlord account
router.delete('/:id', async (req,res) => {
    try {
        const landlord = await Landlord.findOneAndRemove({ _id: req.params.landlordId});

        if(!landlord) {
            return res.status(404).json({ message: 'landlord not found' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
})