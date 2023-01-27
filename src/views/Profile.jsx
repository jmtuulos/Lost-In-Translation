import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"

const Profile = () => {

  const { user } = useUser()

  return (
    <>
      <ProfileHeader username={user.username}/>
      <div className="profile container-fluid">
        <div>
          <h3>Name: {user.username}</h3>
          <ul>Nr of Translations: {user.translations.length}</ul>
        </div>
        <ProfileTranslationHistory translations={user.translations}/>
      </div>
    </>
  )
}

export default withAuth(Profile)

