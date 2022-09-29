const friendsDisplay = document.querySelector('#friends_display')
const eventsDisplay = document.querySelector('#events_display')
const saveFriendButton = document.querySelector('#saveFriendButton')
const firstNameInput = document.querySelector('#firstNameInput')
const lastNameInput = document.querySelector('#lastNameInput')
const notesInput = document.querySelector('#notesInput')
const addFriendForm = document.querySelector('#addFriendForm')

////////////////////////////////////////////////////////////////////

function myFunction(x) {
    x.classList.toggle("change");
  }





  function displayFriends () {
    axios.get('http://localhost:3000/friends')
      .then (res => {
        let friendsArr = res.data.map((friend)=>{
          return(`
            <div class="appt-card">
              <a href="friendview.html" type="button" onclick="link">
                <h2 id="friendbar">${friend.first_name} ${friend.last_name}</h2>
              </a>
            </div>
          `)
        })
        friendsDisplay.innerHTML= friendsArr
      })
  }

  displayFriends()





  function displayEvents () {
    axios.get('http://localhost:3000/events')
      .then (res => {
        let eventsArr = res.data.map((event)=>{
          return(
            `<div class="appt-card">
            <h2 id="eventbar">${event.event_date} ${event.event_name}</h2>
            </div>`
          )
        })
        eventsDisplay.innerHTML= eventsArr
      })
  }

  displayEvents()


  function getFriend () {
    axios.get('http://localhost:3000/friend/1')
  }

  getFriend()