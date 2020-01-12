import { User } from './models/User';

const user = new User({ name: 'new record', age: 0 });

user.on('change', () => {
  console.log('user was changed, we probaly need to update some HTML');
});

user.set({ name: 'FOoo' });
