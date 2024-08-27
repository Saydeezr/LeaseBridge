const router = express.Router();
const { Tenant } = require('../../models/Tenant')

//get all tenants
router.get('/', async (req,res) => {
    const tenants = await Tenant.find();
    res.json(tenants);
});

//get one tenant by id
router.get('/:id', async (req,res) => {
    try{
        const tenant = await Tenant.findOne({ _id: req.params.tenantId})

        if(!tenant){
            return res.status(404).json({ message: 'No tenant found.' })
        }

        res.json({tenant})
    } catch(error) {
            console.log(error);
            return res.status(500).json(error);
        }
    
})

//create new tenant
router.post('/', async (req,res) => {
    try {
        const newTenant = await Tenant.create(req.body);
        res.json(newTenant);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
})

//updates a tenant
router.put('/', async (req,res) => {
    try{
        const tenant = await Tenant.findOneandUpdate(
            {tenants: req.params.tenantId},
            { $pull: { tenants: req.params.tenantId } },
            { new: true }
        );
         res.status(200).json({ message: `tenant ${tenant.name} successfully updated` })
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

//delete tenant account which deletes from Landlord account
router.delete('/:id', async (req,res) => {
    try {
        const tenant = await Tenant.findOneAndRemove({ _id: req.params.tenantId});

        if(!tenant) {
            return res.status(404).json({ message: 'Tenant not found' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
})