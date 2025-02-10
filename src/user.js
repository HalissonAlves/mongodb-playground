import mongoose from 'mongoose';
import PostSchema from './post.js';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
    validate: {
      validator: (name) => name.length > 2,
      message: 'Name must be longer than 2 characters.'
    },
  },
  posts: [PostSchema],
  likes: Number,
  blogPosts: [{
    type: Schema.Types.ObjectId,
    ref: 'blogPost',
  }]
}, { timestamps: true });

UserSchema.virtual('postCount').get(function () {
  return this.posts.length;
});

const User = mongoose.model('user', UserSchema);

export default User;