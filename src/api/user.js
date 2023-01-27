import { createHeaders } from "./index"

const apiUrl = process.env.REACT_APP_API_URL

export const checkForUser = async (username) => {
  try {
    const response = await fetch(`${apiUrl}?username=${username}`)
    if (!response.ok)
      throw new Error('Could not complete result.')
    const data = await response.json()
    return [ null, data ]
  }
  catch (error){
    return [ error.message, []]}
  }

export const createNewUser = async (username) => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: createHeaders(),
      body: JSON.stringify({
        username,
        translations: []
      })
    })
    if (!response.ok)
      throw new Error('Could not create user.')
    const data = await response.json()
    return [ null, data ]
  }
  catch (error){
    return [ error.message, []]
  }
}

export const loginUser = async (username) => {
  const [ checkError, user ] = await checkForUser(username)
  if (checkError !== null)
    return [checkError, []]
  if (user.length > 0)
    return [ null, user.pop() ]
  return createNewUser(username)
}

export const saveTranslation = async (user, translation) => {
  try {
    const response = await fetch(`${apiUrl}/${user.id}`, {
      method: 'PATCH',
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [...user.translations, translation]
      })
    })
    if (!response.ok)
      throw new Error('Could not save translation')
    const data = await response.json()
    return [ null, data ]
  }
  catch (error){
    return [ error.message, []]
  }
}

export const clearTranslationHistory = async (user) => {
  console.log(user.id)
  try {
    const response = await fetch(`${apiUrl}/${user.id}`, {
      method: 'PATCH',
      headers: createHeaders(),
      body: JSON.stringify({
        translations: []
      })
    })
    if (!response.ok)
      throw new Error('Could not clear translations history')
    const data = await response.json()
    return [ null, data ]
  }
  catch (error){
    return [ error.message, []]
  }
}
