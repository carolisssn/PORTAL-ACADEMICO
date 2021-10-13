const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;

//http://bcrypt-generator.com/

const users =[{
    _id:1,
    username:'adm',
    password:'123', //123
    email:'adm@gmail.com'

}];

function findUser(username){
    return users.find(item => item.username);
}

function findUserbyid(ID) {
    return users.find(item =>  item._id === id);
}

//serializeUser => uma vez autenticado ele salva um cookie no front e uma sessão no back.

module.exports = (passport) => {
passport.serializeUser((user, done)=>{
    done(null, user._id);
});


