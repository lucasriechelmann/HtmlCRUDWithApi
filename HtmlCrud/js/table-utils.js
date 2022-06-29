function createTd(text, evEdit, evDelete) {
    let td = document.createElement('td')

    if(text)
        td.innerText = text

    if(evEdit && evDelete){
        let btnEdit = document.createElement('button')
        let btnDelete = document.createElement('button')
        btnEdit.type = 'button'
        btnDelete.type = 'button'
        btnEdit.innerText = 'Edit'
        btnDelete.innerText = 'Delete'
        btnEdit.classList.add('btn')
        btnEdit.classList.add('btn-edit')
        btnDelete.classList.add('btn')
        btnDelete.classList.add('btn-delete')
        btnDelete.classList.add('ms-1')
        btnEdit.onclick = evEdit
        btnDelete.onclick = evDelete

        td.appendChild(btnEdit)
        td.appendChild(btnDelete)
    }

    return td
}

function createTr(){
    return document.createElement('tr')
}