//Output a prompt

process.stdout.write('prompt > ');

//the stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //removing the newline or whitespace
  const pwd = require('./pwd');


  process.stdout.write('You typed:' + cmd);
  process.stdout.write('\nprompt > ')
})
