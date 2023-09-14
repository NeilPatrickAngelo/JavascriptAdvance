const readline = require('readline');

const users = [
    { username: 'user123', password: 'password123'},
    { username: 'johnDoe', password: 'doe123'},
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your username: ', (username) => {
    rl.question('Enter your passwod: ', (password) => {

        const user = users.find((u) => u.username === username && u.password === password);

        if(user){
            console.log('Login Successful! Welcome, ' + user.username);
        }
        else{
            console.log('Login Failed. Incorrect username or password.');
        }

        rl.close();
    });
});
