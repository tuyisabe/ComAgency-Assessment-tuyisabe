const mongoose = require('mongoose');

const UserDataSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  nationality: { type: String, required: true },
  identification: { type: String, required: true },
  purpose:{type:String,required:true},
  duration:{type:Number,required:true},
  dates:{type:Date, required:true},
  port:{type:String,required:true},
  email: { type: String, required: true },
  phone: {type:String, required:true}
});

module.exports = mongoose.model('UserData', UserDataSchema);
