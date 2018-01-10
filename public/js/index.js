var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Nick',
    text: 'Yup, that\'s from me'
  });

});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
})

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});
