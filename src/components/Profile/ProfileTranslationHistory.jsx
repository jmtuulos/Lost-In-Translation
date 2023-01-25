import ProfileTranslationItem from "./ProfileTranslationItem"

const ProfileTranslationHistory = ({translations}) => {
  const TranslationHistory = translations.map(
    (item, index) => <ProfileTranslationItem key={ index + '-' + item } item = { item }/>
  )

  return (
    <div>
      <h3>Your Translation History: </h3>
      <ul>{TranslationHistory}</ul>
    </div>
  )
}

export default ProfileTranslationHistory
