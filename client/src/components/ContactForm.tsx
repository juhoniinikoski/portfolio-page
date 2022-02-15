import axios from 'axios';
import * as React from 'react';
import { MdSend, MdOutlineDone, MdOutlineDoNotDisturbOn } from 'react-icons/md';
import ClipLoader from "react-spinners/ClipLoader";

type HandleChangeType = React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>

const ContactForm = (): JSX.Element => {

  const [disabled, setDisabled] = React.useState<boolean>(true);
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [subject, setSubject] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');

  const [status, setStatus] = React.useState<string>("Send message");
  const [sending, setSending] = React.useState<boolean>(false);

  const clearFields = () => {
    const formFunctions = [setName, setEmail, setSubject, setMessage];
    formFunctions.forEach((fcn: React.Dispatch<React.SetStateAction<string>>) => fcn(''));
  }

  const setStatusMessage = (message: string) => {
    setStatus(message)
    setTimeout(() => {
      setStatus("Send message")
    }, 3000);
  }

  const handleSubmit = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    setSending(true);
    const data = {
      name: name,
      email: email,
      subject: subject,
      message: message
    }
    try {
      await axios.post("https://warm-earth-12766.herokuapp.com/new", data);
      clearFields();
      setStatusMessage("Message sent");
    } catch (error) {
      setStatusMessage("Couldn't send message");
    }
    setSending(false);
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
          {sending ?
            <div style={{display: 'flex', alignItems: 'center'}}>
              <ClipLoader size={20}/>
            </div>
              : 
            <div style={{display: 'flex', alignItems: 'center'}}>
              <p>{status}</p>
              {status === "Send message" ? 
                <MdSend size={20} style={{marginLeft: 12}} /> :
                status === "Couldn't send message" ?
                <MdOutlineDoNotDisturbOn size={20} style={{marginLeft: 12}}/> :
                <MdOutlineDone size={20} style={{marginLeft: 12}} />
              }
            </div>
          }
        </button>
      </div>
    </form>
  )

};

export default ContactForm;