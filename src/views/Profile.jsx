import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"

const Profile = () => {

  const { user } = useUser()

  return (
    <>
      <ProfileHeader username={user.username}/>
      <div>
        <div className="profile">
          <h3>Name: {user.username}</h3>
          <ul>Nr of Translations: {user.translations.length}</ul>
          <ProfileTranslationHistory translations={user.translations}/>
        </div>
      </div>
    </>
  )
}

export default withAuth(Profile)

