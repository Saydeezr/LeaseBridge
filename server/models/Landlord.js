const { Schema, model } = require('mongoose');

const landlordSchema = new Schema(
    {
        first_name: String,
        last_name: String,
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address']
        },
        password: {
            type: String,
            required: true,
        },
        tenants: [{ type: Schema.Types.ObjectId, ref: 'tenant' }]
    },

    {
        toJSON: {
            getters: true,
        },
    }
);

const Landlord = model('landlord', landlordSchema);

module.exports = Landlord;