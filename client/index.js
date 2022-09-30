const friendsDisplay = document.querySelector('#friends_display')
const eventsDisplay = document.querySelector('#events_display')
const saveFriendButton = document.querySelector('#saveFriendButton')
const firstNameInput = document.querySelector('#firstNameInput')
const lastNameInput = document.querySelector('#lastNameInput')
const notesInput = document.querySelector('#notesInput')
const friendNameDisplay = document.querySelector('#friend_name_display')


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
              <a href="friendview.html?id=${friend.friend_id}" type="button" onclick="link">
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
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    console.log(params)
    axios.get(`http://localhost:3000/friend/${params.id}`)
    .then (res => {
      console.log(res)
      let friendName = (
          `<h2>${res.data[0].first_name}</h2>`
        )
      friendNameDisplay.innerHTML= friendName
    })
  }

  getFriend()

 