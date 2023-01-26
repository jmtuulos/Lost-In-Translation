import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"

const Profile = () => {

  const { user } = useUser()

  return (
    <div class="profile container-fluid">
      <ProfileHeader username={user.username}/>
      <ProfileTranslationHistory translations={user.translations}/>
    </div>
  )
}

export default withAuth(Profile)

