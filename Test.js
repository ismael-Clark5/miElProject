let mysql = require ('mysql');

const connection = mysql.createConnection({
    host: '50.87.192.179',
    user: 'ezcazaco_iclark', 
    password: 'Shamelessdb123$', 
    database:   'ezcazaco_mainDB'
});

connection.connect();  

console.log(connection.query('SELECT * FROM Users'));