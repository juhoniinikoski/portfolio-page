import * as React from 'react';
import { MdSend, MdOutlineDone } from 'react-icons/md'

type HandleChangeType = React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>

const ContactForm = (): JSX.Element => {

  const [disabled, setDisabled] = React.useState<boolean>(true);
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [subject, setSubject] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');

  const [showSent, setShowSent] = React.useState<boolean>(false);

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
    setShowSent(true);
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
      <div className='form-name-email-container'>
        <input
          placeholder='Name'
          value={name}
          onChange={handleChange}
          className='form-input-name'
        />
        <input
          placeholder='Email'
          value={email}
          onChange={handleChange}
          className='form-input-email'
        />
      </div>
      <div style={{display: 'flex'}}>
        <input
          value={subject}
          onChange={handleChange}
          placeholder='Subject'
          className='form-input'
        />
      </div>
      <div style={{display: 'flex', position: 'relative'}}>
        <textarea
          value={message}
          onChange={handleChange}
          placeholder='Message'
          style={{height: 180, minHeight: 180}}
          className='form-input'
        />
        <button type='submit' disabled={disabled} className='send-button' style={{position: 'absolute', bottom: 24, right: 24}}>
          {showSent ?
          <div style={{display: 'flex', alignItems: 'center'}}>
            <p>Message sent</p>
            <MdOutlineDone size={20} style={{marginLeft: 12}} />
          </div> 
          : <div style={{display: 'flex', alignItems: 'center'}}>
            <p>Send message</p>
            <MdSend size={20} style={{marginLeft: 12}} />
          </div>}
        </button>
      </div>
    </form>
  )

};

export default ContactForm;