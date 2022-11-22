// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {galleryDetails, updateActiveTabId} = props
  const {thumbnailUrl, thumbnailAltText, id} = galleryDetails
  const click = () => {
    updateActiveTabId(id)
  }

  return (
    <li className="image-item">
      <button type="button" onClick={click}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
