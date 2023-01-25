import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import ProfileActions from "../Profile/ProfileActions"
import logo from './Logo.png'

const Navbar = () => {
  const { user } = useUser()

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        { user !== null &&
          <div className="container-fluid">
            <img src={logo} width="30" height="35"/>
            <ul className="nav navbar-nav">
              <li><NavLink to="/profile">Profile</NavLink></li>
              <li><NavLink to="/translate">Translate</NavLink></li>
              <ProfileActions user={ user }/>
            </ul>
          </div>
        }
      </nav>
    </div>
  )
}

export default Navbar
