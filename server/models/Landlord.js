const { Schema, model } = require('mongoose');

const landlordSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address']
        },
        password: {
            type: String,
            required: true,
        }
    },

    {
        toJSON: {
            getters: true,
        },
    }
);

const Landlord = model('landlord', landlordSchema);

module.exports = Landlord;