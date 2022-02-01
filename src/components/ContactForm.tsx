import * as React from 'react';
import { MdSend } from 'react-icons/md'

type HandleChangeType = React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>

const ContactForm = (): JSX.Element => {

  const [disabled, setDisabled] = React.useState<boolean>(true);
  const [name, setName] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [subject, setSubject] = React.useState<string>('')
  const [message, setMessage] = React.useState<string>('')

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const result = {
      sender: name,
      senderEmail: email,
      subject: subject,
      message: message
    }
    console.log(result)
    const formFunctions = [setName, setEmail, setSubject, setMessage];
    formFunctions.forEach((fcn: React.Dispatch<React.SetStateAction<string>>) => fcn(''))
  }

  const handleChange = (e: HandleChangeType): void => {
    if (e.target.placeholder === "Name") {
      setName(e.target.value)
    } else if (e.target.placeholder === "Email") {
      setEmail(e.target.value)
    } else if (e.target.placeholder === "Subject") {
      setSubject(e.target.value)
    } else {
      setMessage(e.target.value)
    }
  }

  React.useEffect(() => {
    const formFields = [name, email, subject, message];
    formFields.filter((value: string) => value === "").length === 0 ? setDisabled(false) : setDisabled(true);
  }, [name, email, subject, message]);

  return (
    <form style={{marginTop: 32}} onSubmit={handleSubmit}>
      <div style={{display: 'flex', height: 80}}>
        <input
          placeholder='Name'
          value={name}
          onChange={handleChange}
          style={{marginRight: 8}}
          className='email-input'
        />
        <input
          placeholder='Email'
          value={email}
          onChange={handleChange}
          style={{marginLeft: 8}}
          className='email-input'
        />
      </div>
      <div style={{display: 'flex', height: 80}}>
        <input
          value={subject}
          onChange={handleChange}
          placeholder='Subject'
          className='email-input'
        />
      </div>
      <div style={{display: 'flex', position: 'relative'}}>
        <textarea
          value={message}
          onChange={handleChange}
          placeholder='Message'
          style={{height: 180, minHeight: 180}}
          className='email-input'
        />
        <button type='submit' disabled={disabled} className='send-button' style={{position: 'absolute', bottom: 24, right: 24}}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <p>Send message</p>
            <MdSend size={20} style={{marginLeft: 12}} />
          </div>
        </button>
      </div>
    </form>
  )

};

export default ContactForm;