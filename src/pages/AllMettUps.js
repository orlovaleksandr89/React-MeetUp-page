import MeetUpList from '../components/meetups/MeetUpList'
import { useState, useEffect } from 'react'
import { FIRE_URL } from '../constants/dummy_data'

function AllMeetUpPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetUps, setLoadedMeetUps] = useState([])

  useEffect(() => {
    setIsLoading(true)

    fetch(FIRE_URL)
      .then((response) => response.json())
      .then((data) => {
        const meetups = []
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          }
          meetups.push(meetup)
          console.log('fetch')
        }
        setIsLoading(false)
        setLoadedMeetUps(meetups)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []) // useEffect сработает только раз с пустым массивом. Если нет дополнительных тригерров для запуска повторного эффетка. Если мы передаем dependencies в массив, то когда какойто из зависимостей будет поменян в глобальном скоупе, useEffect отработает еще раз

  if (isLoading) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    )
  }
  return (
    <div>
      <h1>All Meet Ups</h1>
      <MeetUpList meetups={loadedMeetUps} />
    </div>
  )
}
export default AllMeetUpPage
