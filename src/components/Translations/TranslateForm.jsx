import { useState } from "react"
import { useForm } from "react-hook-form"
import { saveTranslation } from "../../api/user"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageSave } from "../../utils/storage"
import { TranslationShow } from "./TranslationShow"


const TranslateForm = () => {

  const { register, handleSubmit } = useForm()
  const { user } = useUser()
  const [ apiError, setApiError ] = useState(null)
  const [ translation, setTranslation ] = useState(null)
  const [ loading, setLoading ] = useState(false)

  const onSubmit = async (data) => {
    data.translation = data.translation.toLowerCase().replace(/[^a-z]/gi, "")
    if (!data.translation)
      return
    setLoading(true)
    const [error, translateResponse] = await saveTranslation(
        user,
        data.translation
        )
    if (error !== null)
      setApiError(error)
    if (translateResponse !== null){
      storageSave(STORAGE_KEY_USER, translateResponse)
      user.translations = translateResponse.translations
    }
    setTranslation(data.translation)
    setLoading(false)
  }

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <textarea {...register("translation")} type="text" className="form-control"
      placeholder="Translation" maxLength={40} rows="3"
      required />
      <input disabled={ loading } type="submit"/>
      { apiError && <p>{ apiError }</p>}
      { translation !== null && <ul>{ TranslationShow( { translation } ) }</ul>}
    </form>
  )

}

export default TranslateForm
