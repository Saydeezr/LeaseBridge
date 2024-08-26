const { Schema, model } = require('mongoose');

const tenantSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
    },

    {
        toJSON: {
            getters: true,
        },
    }
);

const Tenant = model('tenant', tenantSchema);
    
module.exports = Tenant;