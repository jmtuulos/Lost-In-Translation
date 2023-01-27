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
    <div className="container-21 container-flex">
      <form onSubmit={ handleSubmit(onSubmit) }>
        <textarea {...register("translation")}
          type="text"
          className="form-control"
          placeholder="Enter your translation here"
          maxLength={40}
          rows="3"
          required />
        <div className="form-text">Non-american-english alphabetic characters are ignored.</div>
        <input
          className="button-23"
          disabled={ loading }
          type="submit"
          value="Translate"/>
        { apiError && <p>{ apiError }</p>}
        { translation !== null &&
          <div className="container-23">
            <ul>{ TranslationShow( { translation } ) }</ul>
          </div>
        }
      </form>
    </div>
  )

}

export default TranslateForm
