import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(`mongodb://${process.env.DB_HOST}/users_test`);
mongoose.connection
  .once('open', () => console.log('Good to go!'))
  .on('error', (error) => {
    console.warn('Warning', error);
  });