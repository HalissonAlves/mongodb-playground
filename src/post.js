import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required."],
  },
});

export default PostSchema;