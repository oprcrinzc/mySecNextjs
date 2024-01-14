import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  name: {type: String, unique: true},
  password: String,
});

export const UserDb = models.Users || model('Users', userSchema);


export async function createUser (U, data) {
  await U.create({
    name: data.name,
    password: data.password
  })
}


// module.exports = {UserDb, createUser};