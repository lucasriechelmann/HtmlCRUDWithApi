const connection = require('../../config/db.config')

const SQL_INSERT = `
insert into person(first_name, last_name, date_of_birth)
values(?,?,?)
`;

module.exports = {
    create(person){
        return new Promise((resolve, reject) => {
            connection.query("insert into person set ?", person, function(err, res){
                if(err)            
                    reject(err)
                else
                    resolve({id: res.insertId})
            })
        })
    },
    get(id){
        return new Promise((resolve, reject) => {
            connection.query("select * from person where id = ?", [id], function(err, res){
                if(err)            
                    reject(err)
                else
                    resolve(res[0])
            })
        })
    },
    getAll(){
        return new Promise((resolve, reject) => {
            connection.query("select * from person ", function(err, res){
                if(err)            
                    reject(err)
                else
                    resolve(res)
            })
        })
    },
    update(id, person){
        return new Promise((resolve, reject) => {
            connection.query("update person set first_name = ?, last_name = ?, date_of_birth = ? where id = ? ", [person.first_name, person.last_name, person.date_of_birth, id], function(err, res){
                if(err)            
                    reject(err)
                else
                    resolve(res)
            })
        })
    },
    delete(id){
        return new Promise((resolve, reject) => {
            connection.query("delete from person where id = ? ", [id], function(err, res){
                if(err)            
                    reject(err)
                else
                    resolve(res)
            })
        })
    }
}