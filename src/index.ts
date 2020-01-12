import { User } from './models/User';

const collection = User.buildUserCollection();

collection.on('change', () => {
  console.log('changed');
  console.log(collection);
});
collection.fetch();
