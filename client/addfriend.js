const addForm = document.querySelector('#addFriendForm')
const addAnotherEventButton = document.querySelector('#addAnotherEventButton')
const saveFriendButton = document.querySelector('#saveFriendButton')
const firstNameInput = document.querySelector('#firstNameInput')
const lasttNameInput = document.querySelector('#lastNameInput')
const notesInput = document.querySelector('#notesInput')

//////////////////////////////////////////////////////////////////
function myFunction(x) {
    x.classList.toggle("change");
  }

function addFriends () {

        bodyObj= { 
        first_name: firstNameInput.value,
        last_name: lastNameInput.value,
        notes: notesInput.value
    };
    
    axios.post('http://localhost:3000/friends', bodyObj)
    
    .then(Res => window.location.href = "http://127.0.0.1:5500/client/loggedin.html")
    .catch(err => console.log(err))

    console.log(bodyObj)
  }

addForm.addEventListener('submit',(e) => {
    e.preventDefault()
    addFriends()
    firstNameInput.value = ''
    lastNameInput.value = ''
    notesInput.value = ''
})