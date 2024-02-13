const mongoose = require('mongoose');
const { isEmail } = ('validator');

const userSchema = new mongoose.Schema({

    email:{
        type: String,
        required: [true, 'Please Enter an Email'],
        unique: true,
        lowercase: true,
        validate: [isEmail , 'Please enter a valid email']
    },
    password: {
        type:String,
        required:[true, 'Please enter a password'],
        minlength: [6, 'Minium password length  is 6 characters'],
    }
});

const User = mongoose.model('User',userSchema);

module.exports = User;