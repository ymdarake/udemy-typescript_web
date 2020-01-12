import { User } from './models/User';

const user = User.buildUser({});

user.on('save', () => {
  console.log(user);
});

user.save();
