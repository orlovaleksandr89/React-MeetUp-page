import { Link } from 'react-router-dom'
import classes from './MainNav.module.css'
import { useContext } from 'react'
import FavotitesContext from '../../store/favorite-context'

function MainNav() {
  const favoritesCtx = useContext(FavotitesContext)

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React MeetUps</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All MeetUps</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Add New Meetup</Link>
          </li>
          <li>
            <Link to='/favorites'>
              Favorite MeetUps
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default MainNav
