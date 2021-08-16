import { useContext } from 'react'

import FavoritesContext from '../store/favorite-context'
import MeetUpList from '../components/meetups/MeetUpList'

function FavoritePage() {
  const favoriteCtx = useContext(FavoritesContext)

  let content
  favoriteCtx.totalFavorites === 0
    ? (content = <p>You got no Favorite. Add some?</p>)
    : (content = <MeetUpList meetups={favoriteCtx.favorites} />)

  return (
    <section>
      <h1>My Favorite</h1>
      {content}
    </section>
  )
}
export default FavoritePage
