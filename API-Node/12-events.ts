import { EventEmitter } from 'node:events';

const events = new EventEmitter();

events.on('user.created', (user) => {
  console.log(user.name + ' created');
});

events.once('user.created', (user) => {
  console.log(user.name + ' created once');
});

// .off pour arrêter d'écouter

events.emit('user.created', { name: 'Romain' });
events.emit('user.created', { name: 'Vincent' });
