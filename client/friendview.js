const addEventForm = document.querySelector('#addEventForm')
const notesInput = document.querySelector('#notesInput')
const friendNameDisplay = document.querySelector('#friend_name_display')
const friendEventsDisplay = document.querySelector('#friend_events_display')
const friendNotesDisplay= document.querySelector('#friend_notes_display')
const eventNameInput = document.querySelector('#eventNameInput')
const eventDateInput = document.querySelector('#eventDateInput')
const friendDeleteButton = document.querySelector('#friendDeleteButton')
const deleteEventButton = document.querySelector('#deleteEventButton')



///////////////////////////////////////////////////////////////////////////

function myFunction(x) {
    x.classList.toggle("change");
  }


function getFriendInfo () {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    console.log(params)
    axios.get(`http://localhost:3000/events/${params.id}`)
    .then (res => {
      let friendEventsArr = res.data.map((event)=>{
        return(
          `
          <h2 id="friendEventBar">${event.event_name} ${event.event_date}</h2>
          `
        )
      })
      friendEventsDisplay.innerHTML= friendEventsArr
    })
  } 

  getFriendInfo()


function getFriendNotes () {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    console.log(params)
    axios.get(`http://localhost:3000/friend/${params.id}`)
    .then (res => {
      console.log(res)
      let friendNotes = (
          `<h2 id="friendNotesBar">${res.data[0].notes}</h2>`
        )
      friendNotesDisplay.innerHTML= friendNotes
    })
  }

  getFriendNotes()


  function getFriend () {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    console.log(params)
    axios.get(`http://localhost:3000/friends/${params.id}`)
    .then (res => {
      console.log(res)
      let friendName = (`<h2 id="friendNameBar">${res.data[0].first_name} ${res.data[0].last_name}</h2>`)
      friendNameDisplay.innerHTML= friendName
    })
  }

  getFriend()




  
  function addEvents () {

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    console.log(params.id)

    let bodyObj= { 
    friend_id: parseInt(params.id),
    event_name: eventNameInput.value,
    event_date: eventDateInput.value
    };

    console.log(bodyObj)

    axios.post('http://localhost:3000/events', bodyObj)

    .then(dbRes => res.status(200).send(dbRes[0]))
    .catch(err => console.log(err))
  
}

addEventForm.addEventListener('submit',(e) => {
e.preventDefault()
addEvents()
eventNameInput.value = ''
eventDateInput.value = ''
.then(location.reload())
})


function deleteFriend () {

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    console.log(params.id)

    axios.delete(`http://localhost:3000/friend/${params.id}`)

    .then(Res => window.location.href = "http://127.0.0.1:5500/client/loggedin.html")
    .catch(err => console.log(err))
    
  
}

friendDeleteButton.addEventListener('click',() => {
deleteFriend()
})