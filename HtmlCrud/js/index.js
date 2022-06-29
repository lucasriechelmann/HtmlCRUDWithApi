const noDisplay = "no-display"
let idField = document.getElementById('id')
let first_nameField = document.getElementById('first_name')
let last_nameField = document.getElementById('last_name')
let date_of_birthField = document.getElementById('date_of_birth')

const form = document.getElementById('form')
const panels = [
    {
        id: 'index',
        panel: document.getElementById('pnlIndex')
    },
    {
        id: 'form',
        panel: document.getElementById('pnlForm')
    }
]

function hideAllPanels(){
    panels.forEach(pan => pan.panel.classList.add(noDisplay))
}

function showPanel(id){
    try{
        panels.filter(x => x.id == id)[0].panel.classList.remove(noDisplay)
    }
    catch{

    }
}

function add(btn){
    hideAllPanels()
    showPanel('form')  
    idField.value = ""
    first_nameField.value = ""
    last_nameField.value = ""
    date_of_birthField.value = ""
}

function cancel(btn){
    hideAllPanels()
    showPanel('index')
}

function save(btn){
    btn.preventDefault()
    let formData = new FormData(form)
    
    let id = formData.get('id')
    let person = {
        first_name: formData.get('first_name'),
        last_name: formData.get('last_name'),
        date_of_birth: formData.get('date_of_birth')
    }
    
    savePerson(id, person)
        .then(data => load())
        .catch(err => setMessage(err))
}

function load(){            
    let tblPeople = document.getElementById('tblPeople')
    tblPeople.innerHTML = ''
    hideAllPanels()
    showPanel('index')

    getAllPeople()        
        .then(people => {
            people.forEach(person => {
                let dateFormatted = person
                    .date_of_birth
                    .substring(0, person.date_of_birth.indexOf("T"))
                    .split('-')
                    .reverse()
                    .reduce((previous, current) => previous ? `${previous}/${current}` : `${current}`, '')
                let tr = createTr()
                tr.appendChild(createTd(person.id.toString()))
                tr.appendChild(createTd(person.first_name))
                tr.appendChild(createTd(person.last_name))
                tr.appendChild(createTd(dateFormatted))
                tr.appendChild(createTd(null, () => edit(person.id), () => deletep(person.id)))
                tblPeople.appendChild(tr)
            })
        })
        .catch(err => console.log(err))
}

function deletep(id){
    deletePerson(id)
        .then(res => load())
        .catch(err => setMessage(err))
}

function edit(id){    
    getPerson(id)
        .then(data => {
            hideAllPanels()
            showPanel('form')                         
            
            idField.value = data.id
            first_nameField.value = data.first_name
            last_nameField.value = data.last_name
            date_of_birthField.value = data.date_of_birth.substring(0, data.date_of_birth.indexOf("T"))
        })
        .catch(err => setMessage(err))
}

function setMessage(text){
    document.getElementById('pnlMessage').innerText = text
}

(function(){
    load()
})()