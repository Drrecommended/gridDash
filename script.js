const userOneProfile = document.querySelectorAll('.userOne')
const userProfiles = document.querySelectorAll('.user')
const user1 = document.querySelectorAll('user1')

const userData = []

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
        userData.push(newUser)
      })
      displayUsers()
    })
}

const displayUsers = () => {

  
  //   userProfile.forEach((profile) => {
  //     userProfiles.forEach((user) => {
  //       if (
  //         profile.classList.contains('user1') &&
  //         profile.classList.contains('circle')
  //       ) {
  //         console.log(user)
  //         profile.style.backgroundImage = `url('${user.picture}')`
  //       }
  //     })
  //   })

  //   for (let i = 0; i < user1.length; i++) {
  //     if (user1[i].classList.contains('name')) {
  //       user1[i].innerText = `${users[0].firstName} ${users[0].lastName}`
  //     } else {
  //       user1[i].style.backgroundImage = `url('${users[0].picture}')`
  //     }
  //   }
  //   for (let i = 0; i < trendingUsers.length; i++) {
  //     for(let k = 1; k < users.length; k++) {
  //         console.log(trendingUsers[k])
  //     }
  //   }
}

getUsers()
