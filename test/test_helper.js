import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

before((done) => {
  mongoose.connect(`mongodb://${process.env.DB_HOST}/users_test`);
  mongoose.connection
    .once("open", () => done())
    .on("error", (error) => {
      console.warn("Warning", error);
    });
});

beforeEach(async () => {
  const { users, comments, blogPosts } = mongoose.connection.collections;
  await users.drop(() => {
    // comments.drop(() => {
    //   blogPosts.drop(() => {

    //   });
    // });
  });
});