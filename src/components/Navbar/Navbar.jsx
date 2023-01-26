import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import ProfileActions from "../Profile/ProfileActions"
import logo from './Logo.png'
import { profilepic, translatepic } from "../../images.js"

const Navbar = () => {
  const { user } = useUser()

  return (
    <nav class="navbar navbar-expand-sm">
      { user !== null &&
        <div class="container-fluid">
          <img src={ translatepic } width="30" alt="sign-language" height="50"/>
          <ul class="navbar-nav">
            <li class="nav-item"><NavLink class="nav-link" to="/profile"><img width="30px" src={ profilepic }/></NavLink></li>
            <li class="nav-item"><NavLink class="nav-link" to="/translate"><img width="30px" src={ translatepic }/></NavLink></li>
            <li class="nav-item"><ProfileActions user={ user }/></li>
          </ul>
        </div>
      }
    </nav>
  )
}

export default Navbar
