import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

console.log(user.get('name'));
console.log(user.get('age'));

user.on('change', () => {
  console.log(111);
});

user.set({ name: 'newname' });

user.trigger('change');
