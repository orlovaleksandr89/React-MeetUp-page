import { useHistory } from 'react-router-dom'

import NewMeetUpForm from '../components/meetups/NewMeetUpForm'

function NewMeetUpPage() {
  const history = useHistory()
  function addNewMeetUp(meetupData) {
    fetch(
      'https://react-gettin-started-97d2a-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/')
    })
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetUpForm onAddMeetUp={addNewMeetUp} />
    </section>
  )
}
export default NewMeetUpPage
