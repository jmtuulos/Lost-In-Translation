import { STORAGE_KEY_USER } from "../const/storageKeys"

export const storageSave = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const storageRead = key => {
  const data = localStorage.getItem(key)
  if (data !== null)
    return JSON.parse(data)
  return null
}

export const storageDelete = () => {
  localStorage.removeItem(STORAGE_KEY_USER)
}

