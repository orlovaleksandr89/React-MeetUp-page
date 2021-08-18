import classes from './Modal.module.css'
import { useContext } from 'react'
import FavoritesContext from '../../store/favorite-context'

function Modal(props) {
  const favCtx = useContext(FavoritesContext)

  function deleteItem() {
    fetch(
      `https://react-gettin-started-97d2a-default-rtdb.firebaseio.com/meetups/${props.meetupId}.json`,
      { method: 'delete' }
    ).then(() => {
      if (favCtx.itemIsFavorite(props.meetupId)) {
        favCtx.removeFavorite(props.meetupId)
      }
      props.onClose()
    })
  }

  return (
    <div className={classes.modal}>
      <h1>Are you sure you want to delete this Meetup?</h1>
      <button
        className={[classes.btn, classes.btn_alt].join(' ')}
        onClick={props.onClose}
      >
        Cancel
      </button>
      <button type='delete' className={classes.btn} onClick={deleteItem}>
        Delete
      </button>
    </div>
  )
}

export default Modal
