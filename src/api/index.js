const apiKey = process.env.REACT_APP_API_KEY

export const createHeaders = () => (
  {
    'Content-Type': 'application/json',
    'x-api-key': apiKey
  }
)
