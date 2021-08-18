import { useContext, useState } from 'react'

import Card from '../ui/Card'
import classes from './MeetUpItem.module.css'
import FavoritesContext from '../../store/favorite-context'
import Backdrop from '../layout/Backdrop'
import Modal from '../layout/Modal'

function MeetUpItem(props) {
  const favoritesCtx = useContext(FavoritesContext)
  const [showModal, setShowModal] = useState(false)

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)

  function togglefavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id)
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      })
    }
  }

  function showModalHendler() {
    setShowModal(true)
  }
  function closeModalHendler() {
    setShowModal(false)
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={togglefavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from favorites' : 'Add to favorites'}
          </button>
          <button onClick={showModalHendler}>Delete MeetUpItem</button>
        </div>
        {showModal && <Backdrop onClick={closeModalHendler} />}
        {showModal && (
          <Modal
            onClose={closeModalHendler}
            meetupId={props.id}
            onLoad={props.onLoad}
          />
        )}
      </Card>
    </li>
  )
}
export default MeetUpItem
