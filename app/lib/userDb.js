import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  name: String,
  password: String,
});

export const UserDb = models.User || model('User', userSchema);


export async function createUser (U, data) {
  await U.create({
    name: data.name,
    password: data.password
  })
}


// module.export = {UserDb, createUser};