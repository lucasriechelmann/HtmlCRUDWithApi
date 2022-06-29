const apiUrl = "http://localhost:5000/api/v1/people/"

function getAllPeople(){
    return fetch(apiUrl, {
        method: 'GET',
        mode: 'cors',
        headers: {}
    })
    .then(response => response.json())
}

function getPerson(id){
    return fetch(`${apiUrl}${id}`,{
        method: "GET",
        mode: 'cors',
        headers: {}
    })
    .then(response => response.json())
}

function savePerson(id, person){
    const url = id ? `${apiUrl}${id}` : apiUrl

    return fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: id ? "PUT" : "POST",
        body: JSON.stringify(person)
    })
}

function deletePerson(id){
    return fetch(`${apiUrl}${id}`,{
        method: 'DELETE',
        mode: 'cors',
        headers: {}
    })
}