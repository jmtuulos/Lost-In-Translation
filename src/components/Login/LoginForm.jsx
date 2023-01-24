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
		if (userResponse !== null){
			storageSave(STORAGE_KEY_USER, userResponse)
			setUser(userResponse)
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
			<input {...register("name")} type="text"
			minLength="3"
			placeholder="Enter username"
			required/>
			<input disabled={ loading } type="submit"/>
			{loading && <p>Logging in</p>}
			{ apiError && <p>{ apiError }</p>}
		</form>
	)
}

export default LoginForm
