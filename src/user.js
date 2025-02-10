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
  postCount: Number,
  posts: [PostSchema],
}, { timestamps: true });

const User = mongoose.model('user', UserSchema);

export default User;