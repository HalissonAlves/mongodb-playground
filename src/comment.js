import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  content: {
    type: String,
    required: [true, "Content is required."],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
})

const Comment = mongoose.model("comment", CommentSchema);

export default Comment;