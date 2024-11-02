//we are having owner to identiy the owner of prodcuts

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
});

module.exports = mongoose.model('User', UserSchema);