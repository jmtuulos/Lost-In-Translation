import { useUser } from "../../context/UserContext"
import { storageDelete } from "../../utils/storage"

const ProfileActions = () => {

  const { setUser } = useUser()

  const handleLogoutClick = () => {
    if (window.confirm('Confirm logout?')){
      storageDelete()
      setUser(null)
    }
  }

  return (
    <ul>
      <li><button onClick={ handleLogoutClick }>Logout</button></li>
    </ul>
  )
}

export default ProfileActions
