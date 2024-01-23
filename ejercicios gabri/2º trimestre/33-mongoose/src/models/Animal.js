import mongoose from "mongoose";

const { Schema } = mongoose;

const animalSubSchema = new Schema({
  data: String
});

const animalSchema =new Schema({
  name: String,
  color: String,
  legs: Number,
  hasTail: Boolean,
  age: Number,
  data: animalSubSchema
});

const model = mongoose.model('Animal', animalSchema);

export default mongoose.model('Animal', animalSchema);
