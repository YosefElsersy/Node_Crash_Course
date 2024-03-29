const User = require('../models/User')

//hanedl errors
const handelErrors =(err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password:''};
    // duplicate email error
    if(err.code === 11000){
        errors.email = 'that email is already registerd';
        return errors;
    }
// validation errors
if(err.message.includes('user validation failed')){
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
    });
    
}
    return errors;
}    

// controller actions
module.exports.signup_get = (req ,res)=>{
    res.render('signup');
}

module.exports.login_get = (req, res)=> {
    res.render('login');
}

module.exports.signup_post = async (req,res) =>{
    const { email ,password } = req.body;
    
    try {
        const user = await User.create({ email , password});
        req.status(201).json(user);
        
    } catch (error) {
        // console.log(err);
        const errors = handelErrors(err);
        req.status(400).json({ errors });
    }
}

module.exports.login_post = async (req,res) => {
    const { email , password } = req.body;

    console.log(email,password);
    res.send('user login');
}