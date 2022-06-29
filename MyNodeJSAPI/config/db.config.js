const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "mynodejsapi"
})

connection.connect(function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log('database connected')
    }
})

module.exports = connection