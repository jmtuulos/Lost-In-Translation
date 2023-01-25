import images from "../../images"

export const TranslationShow = ({ translation }) => {
  return (
    <div>
      { [...translation].map(item => <img src={images[item]} alt={item}/>)}
          </div>
  )
}
