import MeetUpItem from './MeetUpItem'
import classes from './MeetUpList.module.css'

function MeetUpList(props) {
  return (
    <ul classes={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetUpItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  )
}

export default MeetUpList
