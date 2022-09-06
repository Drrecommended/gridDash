const user1 = document.querySelectorAll('.user1')

const userProfiles = []

const getUsers = () => {
  fetch('https://randomuser.me/api/?inc=name,picture&results=5')
    .then((results) => {
      return results.json()
    })
    .then((data) => {
      let users = data.results
      users.forEach((user) => {
        const newUser = {
          firstName: user.name.first,
          lastName: user.name.last,
          picture: user.picture.thumbnail,
        }
        userProfiles.push(newUser)
      })
      displayUsers(userProfiles)
    })
}

const displayUsers = (users) => {
  for (let i = 0; i < user1.length; i++) {
    if (user1[i].classList.contains('name')) {
      user1[i].innerText = `${users[0].firstName} ${users[0].lastName}`
    } else {
      user1[i].style.backgroundImage = `url('${users[0].picture}')`
    }
  }
  
}

getUsers()
