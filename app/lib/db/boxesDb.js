import { Schema, model, models } from 'mongoose';

const schema = new Schema({
  name: String,
  owner: String,
});

export const UserDb = models.Boxes || model('Boxes', schema);


export async function createBox (U, data) {
  await U.create({
    name: data.name,
    owner: data.owner
  })
}