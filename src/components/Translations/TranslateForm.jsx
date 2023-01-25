import { useState } from "react"
import { useForm } from "react-hook-form"
import { saveTranslation } from "../../api/user"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageSave } from "../../utils/storage"

const TranslateForm = () => {

  const { register, handleSubmit } = useForm()
  const { user } = useUser()
  const [ apiError, setApiError ] = useState(null)

  const onSubmit = async (data) => {
    const [error, translateResponse] = await saveTranslation(user, data.translation)
    if (error !== null)
      setApiError(error)
    console.log("translate response:", translateResponse.translations)
    if (translateResponse !== null){
      storageSave(STORAGE_KEY_USER, translateResponse.translations)
      user.translations = translateResponse.translations
    }
  }

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <input {...register("translation")} type="text"
      placeholder="Translation"
      required/>
      <input type="submit"/>
      { apiError && <p>{ apiError }</p>}
    </form>
  )

}

export default TranslateForm
