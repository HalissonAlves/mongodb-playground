import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required."],
  },
  content: {
    type: String,
    required: [true, "Content is required."],
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
});

const BlogPost = mongoose.model("blogPost", BlogPostSchema);

export default BlogPost;