import mongoose from "mongoose";

const { Schema } = mongoose;

const animalSchema =new Schema({
  name: String,
  color: String,
  legs: Number,
  hasTail: Boolean,
  age: Number
});

const model = mongoose.model('Animal', animalSchema);

export default mongoose.model('Animal', animalSchema);
