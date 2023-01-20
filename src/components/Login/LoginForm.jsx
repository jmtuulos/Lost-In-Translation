import { useForm } from 'react-hook-form'
import { useState } from 'react'
import checkForUser from '../../api/user.js'


const LoginForm = () => {
	const { register, handleSubmit } = useForm()
	// const [data1, setData] = useState("")

	return (
		<form onSubmit={ handleSubmit((data) => checkForUser(data))}>
			<input {...register("name")} type="text"
			minLength="3"
			placeholder="Enter username"
			required/>
			<input type="submit"/>
		</form>
	)
}

export default LoginForm
