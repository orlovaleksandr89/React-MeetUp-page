import classes from './NewMeetUpForm.module.css'
import Card from '../ui/Card'
import { useRef } from 'react'

function NewMeetUpForm(props) {
  const titleInputRef = useRef()
  const imageInputRef = useRef()
  const addressInputRef = useRef()
  const descriptionInputRef = useRef()

  function submitHandler(event) {
    event.preventDefault()
    const enteredTitle = titleInputRef.current.value
    const enteredImgUrl = imageInputRef.current.value
    const enteredAddress = addressInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value

    const newMeetUpData = {
      title: enteredTitle,
      image: enteredImgUrl,
      address: enteredAddress,
      description: enteredDescription,
    }
    props.onAddMeetUp(newMeetUpData)
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>MeetUp title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Image url</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            required
            id='description'
            rows='6'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type='submit'> Add MeetUp</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetUpForm
