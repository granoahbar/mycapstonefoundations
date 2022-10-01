const addForm = document.querySelector('#addFriendForm')
const addAnotherEventButton = document.querySelector('#addAnotherEventButton')
const saveFriendButton = document.querySelector('#saveFriendButton')
const firstNameInput = document.querySelector('#firstNameInput')
const lasttNameInput = document.querySelector('#lastNameInput')
const notesInput = document.querySelector('#notesInput')

//////////////////////////////////////////////////////////////////

function addFriend () {

    const {} = req.body;

    console.log('works')

        bodyObj= { 
        firstname: firstNameInput.value,
        lastname: lastNameInput.value,
        notes: notesInput.value
    }
    console.log(bodyObj)
    axios.post('http://localhost:3000/friends', bodyObj)
    
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      console.log('rgerg')
      
  }

addForm.addEventListener('submit',(e) => {
    e.preventDefault()
    addFriend()
})