import mongoose from 'mongoose';

const { Schema, model }= mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true}

},{ timestamps: true});



userSchema.post('find',function(results){
  results.forEach(doc =>{
    delete doc.password;
  });
  next();
})

export default model('User', userSchema);
