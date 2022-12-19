let button = document.getElementById("button");
let inputPhone = document.getElementById("inputPhone");
let inputName = document.getElementById("inputName");

class Contact {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}

let contacts = [];
contacts.push(new Contact("Grzegorz Rogus", "500600700"));
contacts.push(new Contact("Jacek Dajda", "500600700"));


let listContacts = function() {
    document.getElementById('contacts').innerHTML = " ";
    for(let i = 0; i < contacts.length; i++) {
        document.getElementById('contacts').innerHTML += 
        '<tr><td> <h3 id= "name' + i + '">' + contacts[i].name + '<br>' + '</h3>' + '<h4 id = "phone' + i + '">' + contacts[i].phone + '</h4>' +
        '<td><button class="fa fa-trash trash" onclick=deleteContact(' + i + ')><img src="remove.png" alt="Trash"></button>  </td></tr>';
    }
}


function isAllowed(name, phone) {
    let regexp = /^[a-zA-ąĄćĆęĘłŁńŃóÓśŚżŻźŹ ,.'-]+$/i;
    if (name === "") {
        alert("Pole Imię i Nazwisko nie może być puste");
        return false;
    } else {
        let [first, last] = name.split(' ');
        let [, lastSecondPart] = last.split('-')
        if (!regexp.test(name)){
            alert("Znaki specjalne są niedozwolone");
            return false;
        }
        if(first[0] !== first[0].toUpperCase() || last[0] !== last[0].toUpperCase()
        || (lastSecondPart && lastSecondPart[0] !== lastSecondPart[0].toUpperCase())){
            alert("Imię i Nazwisko musi zaczynać się z wielkiej litery");
            return false;
        }
    }
    if (phone === ""){
        alert("Pole Numer telefonu nie może być puste");
        return false;
    }
    if (phone[0] === "+" && phone.length !== 13) {
        alert("Niepoprawny numer telefonu");
        return false;
    }
    if(phone[0] !== "+" && (phone.length !== 9)) {
        alert("Niepoprawny numer telefonu");
        return false;
    }
    return true;
}

button.onclick = function () {
    let name = document.getElementById('inputName').value;
    let phone = document.getElementById('inputPhone').value;
    phone = phone.replace(/\s/g, '');
    if (isAllowed(name, phone)){
        let contact = new Contact(name, phone);
        contacts.push(contact);
        listContacts();
    }
}

let deleteContact = function(i){
    contacts.splice(i, 1);
    listContacts();
}

listContacts();

inputName.oninput = function (event) {
    this.value = this.value.replace(/[^[a-zA-Z].]/g, '').replace(/(\..*)\./g, '$1');
}

inputPhone.oninput = function () {
    this.value = this.value.replace(/[^+^0-9 .]/g, '').replace(/(\..*)\./g, '$1');
}