
const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    phone: {
        type: Number,
        required: [true, 'Phone is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    role: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    }
});



UserSchema.methods.toJSON = function() {
    const { __v, password, ...user  } = this.toObject();
    return user;
}

module.exports = model( 'User', UserSchema );
