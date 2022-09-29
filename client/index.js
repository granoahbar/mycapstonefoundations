const friendsDisplay = document.querySelector('#friends_display')

function myFunction(x) {
    x.classList.toggle("change");
  }

  function displayFriends () {
    axios.get('http://localhost:3000/friends')
      .then (res => {
        let friendsArr = res.data.map((friend)=>{
          return(
          `<div class="appt-card">
          <a href="friendview.html" type="button" onclick="link"><h2 id="friendbar">${friend.first_name} ${friend.last_name}</h2></a>
          </div>`)
        })
        friendsDisplay.innerHTML= friendsArr
      })
  }

  displayFriends()

  function getFriend () {
    axios.get('http://localhost:3000/friend/1')
  }

  getFriend()