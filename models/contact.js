
const { Schema, model } = require('mongoose');

const ContactSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required']
    },
    phone: {
        type: Number,
        required: [true, 'Phone is required'],
        unique: true
    },
    role: {
        type: String,
        required: true,
        emun: 'CONTACT_ROLE'
    },
    status: {
        type: Boolean,
        required: true,
    }
});



ContactSchema.methods.toJSON = function() {
    const { ...contact  } = this.toObject();
    return contact;
}

module.exports = model( 'Contact', ContactSchema );
