import TranslateForm from "../components/Translations/TranslateForm"
import TranslateHeader from "../components/Translations/TranslateHeader"
import withAuth from "../hoc/withAuth"

const Translate = () => {
  return (
    <>
      <TranslateHeader/>
      <TranslateForm/>
    </>
    )
}

export default withAuth(Translate)
