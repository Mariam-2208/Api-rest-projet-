// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true

},
password:{


type: String,
required: true
},
picture:{
    type:String
    
},
phone :{
    type:String
},
role:{
    type:String
}
});





const User = mongoose.model('User', userSchema);

module.exports = User;