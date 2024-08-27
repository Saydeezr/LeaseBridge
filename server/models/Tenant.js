const { Schema, model } = require('mongoose');

const tenantSchema = new Schema(
    {
        first_name: String,
        last_name: String,
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
        landlord: { type: Schema.Types.ObjectId, ref: 'landlord' },
        payments: [{ type: Schema.Types.ObjectId, ref: 'payment' }]
    },

    {
        toJSON: {
            getters: true,
        },
    }
);

const Tenant = model('tenant', tenantSchema);
    
module.exports = Tenant;