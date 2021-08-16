import { Route, Switch } from 'react-router-dom'
import AllMeetUpPage from './pages/AllMettUps'
import FavoritePage from './pages/Favorites'
import NewMeetUpPage from './pages/NewMeetUp'
import Layout from './components/layout/Layout'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact={true}>
          <AllMeetUpPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetUpPage />
        </Route>
        <Route path='/favorites'>
          <FavoritePage />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
