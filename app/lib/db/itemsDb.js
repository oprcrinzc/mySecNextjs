import { Schema, model, models } from 'mongoose';

const schema = new Schema({
  name: String,
  desc: String,
  owner: String,
  box: Schema.Types.ObjectId
});

export const UserDb = models.Items || model('Items', schema);


export async function createItem (U, data) {
  await U.create({
    name: data.name,
    desc: data.desc,
    owner: data.owner,
    box: data.boxId
  })
}