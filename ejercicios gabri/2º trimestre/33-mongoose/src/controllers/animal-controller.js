import { HttpStatusError } from "common-errors";
import Animal from "../models/Animal.js";
import mongoose from 'mongoose';

export async function createAnimal(req, res, next){
  try{
    const Animal = new Animal(req.body);
    const createdAnimal= await Animal.save();
    return  res.status(201).send(createdAnimal);
  }catch(error){
    next(error);
  }
}

export async function getAnimals(req, res, next){
  try{
    const results= await Animal.find();
    return  res.send(results)
  }catch(error){
    next(error);
  }
}

export async function updateAnimal(req, res, next){
  try{
    const { id } = req.params;

    const animal = await Animal.findById(id);
    Object.assign(animal, req.body)

    const updatedAnimal= await animal.save();
    return  res.status(201).send(updatedAnimal);
  }catch(error){
    next(error);
  }
}


export async function deletedAnimal(req, res, next){
  try{
    const { id } = req.params;

    const deletedAnimal= await Animal.findByIdAndDelete(id);

    if(!deletedAnimal)throw HttpStatusError(404,`Animal ${id} not found`)

    return  res.status(201).send(deletedAnimal);
  }catch(error){
    next(error);
  }
}
