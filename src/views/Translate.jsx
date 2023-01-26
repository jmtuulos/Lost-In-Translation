// import TranslateForm from "../components/Translations/TranslateForm"
import TranslateForm from "../components/Translations/TranslateForm"
import TranslateHeader from "../components/Translations/TranslateHeader"
import { TranslationShow } from "../components/Translations/TranslationShow"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"

const Translate = () => {
  return (
    <>
      <h1>Translate</h1>
      <TranslateHeader/>
      <TranslateForm/>
      {/* <TranslateActions/> */}
    </>
    )
}

export default withAuth(Translate)
