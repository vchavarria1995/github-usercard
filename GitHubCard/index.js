import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const gitInfo = axios.get('https://api.github.com/users/vchavarria1995')
.then(res => {console.log(res.data)
entryPoint.appendChild(cardMaker(res.data));
})
.catch(err => console.log(err))

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const entryPoint = document.querySelector('div.cards')

function cardMaker({avatar_url, name, login, location, html_url, followers, following, bio}) {
  const card = document.createElement('div')
  card.classList.add('card')

  const profileImg = document.createElement('img')
  card.appendChild(profileImg)
  profileImg.src = avatar_url

  const divCard = document.createElement('div')
  card.appendChild(divCard)
  divCard.classList.add('card-info')

  const cardName = document.createElement('h3')
  divCard.appendChild(cardName)
  cardName.classList.add('name')
  cardName.textContent = name

  const username = document.createElement('p')
  divCard.appendChild(username)
  username.textContent = login

  const gitLocation = document.createElement('p')
  divCard.appendChild(gitLocation)
  gitLocation.getAttribute('href', html_url)
  gitLocation.textContent = 'Location: ' + location

  const profileText = document.createElement('p')
  divCard.appendChild(profileText)
  profileText.textContent = 'Profile: ' + html_url

  const githubLink = document.createElement('a')
  profileText.appendChild(githubLink)

  const gitFollowers = document.createElement('p')
  divCard.appendChild(gitFollowers)
  gitFollowers.textContent = 'Followers: ' + followers

  const gitFollowing = document.createElement('p')
  divCard.appendChild(gitFollowing)
  gitFollowing.textContent = 'Following: ' + following

  const aboutMe = document.createElement('p')
  divCard.appendChild(aboutMe)
  aboutMe.textContent = 'Bio: ' + bio

return card
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
