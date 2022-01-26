import * as React from 'react';
import { MdSend } from 'react-icons/md'

const ContactForm = (): JSX.Element => {

  const [disabled, setDisabled] = React.useState<boolean>(true);

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    console.log('click')
  }

  return (
    <form style={{marginTop: 32}} onSubmit={handleSubmit}>
      <div style={{display: 'flex', height: 80}}>
        <input
          placeholder='Name'
          style={{marginRight: 8}}
          className='email-input'
        />
        <input
          placeholder='Email'
          style={{marginLeft: 8}}
          className='email-input'
        />
      </div>
      <div style={{display: 'flex', height: 80}}>
        <input
          placeholder='Subject'
          className='email-input'
        />
      </div>
      <div style={{display: 'flex', position: 'relative'}}>
        <textarea
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