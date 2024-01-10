import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  name: String,
  password: String,
});

const UserDb = models.User || model('User', userSchema);


const createUser = async (data) => {

}


module.export = {UserDb, createUser};