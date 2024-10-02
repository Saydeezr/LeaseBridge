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
        city: { 
            type: String,
            required: true
        },
        state: {
            type: String,
            required:true
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

//hash password


const Landlord = model('landlord', landlordSchema);

module.exports = Landlord;