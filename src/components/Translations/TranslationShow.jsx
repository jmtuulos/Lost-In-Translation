import translationImages from "../../translationImages"

export const TranslationShow = ({ translation }) => {
  return (
    <div>
      { [...translation].map(
        (item, index) => <img key={index} src={translationImages[item]} alt={item}/>
        )}
    </div>
  )
}
