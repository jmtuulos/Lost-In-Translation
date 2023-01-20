const apiUrl = process.env.REACT_APP_API_URL

const checkForUser = (data) => {
  console.log("checkforuser name: " + data.name)
  console.log(data.name)
  fetch(apiUrl + "translations")
  .then((response) => response.json())
  .then((apiData) => {
    console.log(apiData.some(user => user.username === data.name))})
}

const createNewUser ()
export default checkForUser
