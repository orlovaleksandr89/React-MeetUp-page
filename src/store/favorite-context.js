import { createContext, useState } from 'react'

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
  deleteItem: (meetupId) => {},
})

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([])

  function addFavotiteHandler(favotiteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favotiteMeetup)
    })
  }
  function removeFavotiteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId)
    })
  }
  function itemIsFavotiteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId)
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavotiteHandler,
    removeFavorite: removeFavotiteHandler,
    itemIsFavorite: itemIsFavotiteHandler,
  }

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  )
}
export default FavoritesContext
