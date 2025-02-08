import assert from 'assert';
import User from '../src/user.js';

describe('Creating records', () => {
  it('saves a user', async () => {
    const joe = new User({ name: 'Joe' });

    await joe.save().then(() => {
      assert(!joe.isNew);
    });
  });
});