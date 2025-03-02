import assert from 'assert';
import User from '../src/user.js';

describe('Updating records', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe', likes: 0 });
    joe.save().then(() => done());
  });

  it('instance type using set n save', (done) => {
    joe.set('name', 'Alex');
    joe.save().then(() => User.find({}))
      .then((users) => {
        assert(users.length === 1);
        assert(users[0].name === 'Alex');
        done();
      });
  });

  it('A model instance can update', (done) => {
    joe.updateOne({ name: 'Alex' })
      .then(() => User.find({}))
      .then((users) => {
        assert(users.length === 1);
        assert(users[0].name === 'Alex');
        done();
      });
  });

  it('A model class can update', (done) => {
    User.updateMany({ name: 'Joe' }, { name: 'Alex' })
      .then(() => User.find({}))
      .then((users) => {
        assert(users.length === 1);
        assert(users[0].name === 'Alex');
        done();
      });
  });

  it('A user can have their likes incremented by 1', (done) => {
    User.updateMany({ name: 'Joe' }, { $inc: { likes: 10 } })
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert(user.likes === 10);
        done();
      });
  });
});