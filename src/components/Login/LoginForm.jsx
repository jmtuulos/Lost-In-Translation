import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { loginUser } from '../../api/user.js'
import { storageSave } from '../../utils/storage.js'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext.jsx'
import { STORAGE_KEY_USER } from '../../const/storageKeys.js'

const LoginForm = () => {

	const { register, handleSubmit } = useForm()
	const { user, setUser } = useUser()
	const navigate = useNavigate()

	const onSubmit = async (data) => {
		setLoading(true)
		const [error, userResponse] = await loginUser(data.name)
		if (error !== null)
			setApiError(error)
		if (userResponse !== []){
			setUser(userResponse)
			storageSave(STORAGE_KEY_USER, userResponse)
		}
		setLoading(false)
	}

	const [ loading, setLoading ] = useState(false)
	const [ apiError, setApiError ] = useState(null)

	useEffect(() => {
		if (user !== null)
			navigate('/translate')
	}, [ user, navigate ])

	return (
		<form onSubmit={ handleSubmit(onSubmit) }>
			<div>
        <input {...register("name")} type="text"
        minLength="3"
        placeholder="Enter Your name"
        required/>
      </div>
      <input
        className="button-23"
        disabled={ loading }
        type="submit"
        value="Log in"/>
      {loading && <p>Logging in</p>}
      { apiError && <p>{ apiError }</p>}
  </form>
	)
}

export default LoginForm
