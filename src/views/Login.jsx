import LoginForm from "../components/Login/LoginForm"
import { loginpagepic } from "../images"

const Login = () => {
  return (
    <div className="d-flex align-items-center">
        <div className="container container-login d-flex justify-content-center align-items-center">
          <ul>
            <h1>Login</h1>
            <LoginForm/>
          </ul>
        </div>
        <img src={loginpagepic} alt="All signs of sign language" className="img-front w-75"/>
      </div>
  )
}

export default Login
