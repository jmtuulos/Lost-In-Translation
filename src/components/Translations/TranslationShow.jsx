import images from "../../images"

export const TranslationShow = ({ translation }) => {
  return (
    <div>
      { [...translation].map(
        (item, index) => <img key={index} src={images[item]} alt={item}/>
        )}
    </div>
  )
}
