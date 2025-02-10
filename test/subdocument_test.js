import assert from 'assert';
import User from '../src/user.js';

describe('Subdocuments', () => {
  it('can create a subdocument', (done) => {
    const joe = new User({
      name: 'Joe',
      posts: [{ title: 'PostTitle' }]
    });

    joe.save()
      .then(() => {
        return User.findOne({ name: 'Joe' });
      })
      .then((user) => {
        assert(user.posts[0].title === 'PostTitle');
        done();
      });
  });

  it('Can add subdocuments to an existing record', (done) => {
    const joe = new User({
      name: 'Joe',
      posts: []
    });

    joe.save()
      .then(() => {
        return User.findOne({ name: 'Joe' })
      })
      .then((user) => {
        user.posts.push({ title: 'New Post' });
        return user.save();
      })
      .then(() => {
        return User.findOne({ name: 'Joe' });
      })
      .then((user) => {
        assert(user.posts[0].title === 'New Post');
        done();
      });
  });

  it('Can remove an existing subdocument', (done) => {
    const joe = new User({
      name: 'Joe',
      posts: [{ title: 'New Title' }]
    });

    joe.save()
      .then(() => {
        return User.findOne({ name: 'Joe' });
      })
      .then((user) => {
        user.posts.pull(user.posts[0])
        return user.save();
      })
      .then(() => {
        return User.findOne({ name: 'Joe' });
      })
      .then((user) => {
        assert(user.posts.length === 0);
        done();
      });
  });
});