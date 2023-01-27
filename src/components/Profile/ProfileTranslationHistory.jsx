import { ProfileHistoryClear } from "./ProfileHistoryClear"
import ProfileTranslationItem from "./ProfileTranslationItem"

const ProfileTranslationHistory = ({translations}) => {
  const TranslationHistory = translations
    .slice(-10).reverse().map((item, index) =>
      <ProfileTranslationItem key={ index + '-' + item } item = { item }/>
  )
// should only show 10 latest translations
  return (
    <div>
      <ProfileHistoryClear/>
      <h3>Last 10 translations: </h3>
      <ul>{TranslationHistory}</ul>
    </div>
  )
}

export default ProfileTranslationHistory
