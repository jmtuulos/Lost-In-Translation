import images from "../../images"

export const TranslationShow = ({ translation }) => {
  return (
    <div>
      { [...translation.toLowerCase()].map(item => <img src={images[item]}/>)
  }
    </div>
  )
}
