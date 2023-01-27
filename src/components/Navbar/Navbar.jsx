import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import ProfileActions from "../Profile/ProfileActions"
import { navpic, profilepic, translatepic } from "../../images.js"

const Navbar = () => {
  const { user } = useUser()

  return (
    <nav className="navbar navbar-expand-sm">
      { user !== null &&
        <div className="container-fluid">
            <div>
              <h4>Hello there,</h4>
              <h2>{user.username}</h2>
            </div>
          <ul className="navbar-nav">
            <li className="nav-item"><NavLink className="nav-link" to="/profile"><img width="30px" alt="profilepicture" src={ profilepic }/></NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/translate"><img width="30px" alt ="translatehands" src={ translatepic }/></NavLink></li>
            <li className="nav-item"><ProfileActions/></li>
          </ul>
        </div>
      }
    </nav>
  )
}

export default Navbar
