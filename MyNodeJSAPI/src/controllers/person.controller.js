const PersonModel = require('../models/person.model')

module.exports = {
    index(request, response){
        PersonModel
            .getAll()
            .then(people => response.send(people))
            .catch(err => response.status(400).send(err))
    },
    show(request, response){
        PersonModel
            .get(request.params.id)
            .then(person => response.send(person))
            .catch(err => response.status(400).send(err))
    },
    destroy(request, response){
        PersonModel
            .delete(request.params.id)
            .then(person => response.send(person))
            .catch(err => response.status(400).send(err))
    },
    update(request, response){
        PersonModel
            .update(request.params.id, request.body)
            .then(person => response.send(person))
            .catch(err => response.status(400).send(err))
    },
    store(request, response){        
        PersonModel
            .create(request.body)
            .then(id => response.send(id))
            .catch(err => response.status(500).send(err))
    }
}