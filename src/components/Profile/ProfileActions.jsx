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
      <button className="button-23" onClick={ handleLogoutClick }>Logout</button>
  )
}

export default ProfileActions
