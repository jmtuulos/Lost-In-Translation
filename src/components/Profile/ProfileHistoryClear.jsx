import { useState } from "react"
import { clearTranslationHistory } from "../../api/user"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageSave } from "../../utils/storage"

export const ProfileHistoryClear = () => {
  const { user, setUser } = useUser()
  const [ loading, setLoading ] = useState(false)
	const [ apiError, setApiError ] = useState(null)

  const handleHistoryClear = async () => {
    if (!window.confirm("Are you sure?"))
      return
		setLoading(true)
		const [error, clearResult] = await clearTranslationHistory(user)
		if (error !== null)
			setApiError(error)
		if (clearResult !== null){
      setUser(clearResult)
			storageSave(STORAGE_KEY_USER, clearResult)
    }
		setLoading(false)
  }

  return (
    <>
      <button
      type="button"
      className="btn btn-primary"
      disabled={ loading }
      onClick={ handleHistoryClear }>Clear history</button>
      { loading && <p>Clearing history</p> }
      { apiError && <p>{ apiError }</p> }
    </>
  )
}
