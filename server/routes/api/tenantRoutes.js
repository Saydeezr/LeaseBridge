const router = express.Router();
const { Tenant } = require('../../models/Tenant')

router.get('/', async (req,res) => {
    const tenants = await Tenant.find();
    res.json(tenants);
});

router.get('/:id', async (req,res) => {
    try{
        const tenant = await Tenant.findOne({ _id: req.params.tenantId})

        if(!tenant){
            return res.status(404).json({ message: 'No tenant found.' })
        }

        res.json({tenant})
    } catch(err) {
            console.log(err);
            return res.status(500).json(err);
        }
    
})

router.post