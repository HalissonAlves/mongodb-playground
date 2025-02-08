import assert from 'assert';
import User from '../src/user.js';

describe('Reading users out of the database', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    joe.save().then(() => done());
  });

  it('finds all users with a name of joe', async () => {
    const users = await User.find({ name: 'Joe' });
    assert(users[0]._id.toString() === joe._id.toString());
  });

  it('find a user with a particular id', async () => {
    const user = await User.findOne({ _id: joe._id });
    assert(user.name === 'Joe');
  });

});