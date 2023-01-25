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
  localStorage.clear()
}
