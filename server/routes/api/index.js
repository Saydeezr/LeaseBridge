const router = require('express').Router();
const landlordRoutes = require('./landlordRoutes');
const tenantRoutes = require('./tenantRoutes');

router.use('/tenants', tenantRoutes);
router.use('/landlords', landlordRoutes);

module.exports = router;