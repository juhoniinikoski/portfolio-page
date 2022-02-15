import * as React from 'react';
import HeaderComponent from './HeaderComponent';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface Props {
  children: React.ReactNode
}

const Layout = (props: Props): JSX.Element => {
  return (
    <div className='main-container'>
      <HeaderComponent />
      <div className='content'>
        {props.children}
      </div>
      <footer style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 48}}>
        <div style={{display: 'flex', marginTop: 72, marginBottom: 8}}>
          <a href={'https://github.com/juhoniinikoski'} target="_blank" rel="noreferrer noopener">
            <FaGithub color={'#A6A6A6'} size={28} style={{marginRight: 8, cursor: 'pointer'}} />
          </a>
          <a href={'https://www.linkedin.com/in/juhoniinikoski/'} target="_blank" rel="noreferrer noopener">
            <FaLinkedin color={'#A6A6A6'} size={28} style={{marginLeft: 8, cursor: 'pointer'}} />
          </a>
        </div>
        <p style={{fontSize: 17, fontWeight: 300, color: '#a6a6a6'}}>Juho Niinikoski · {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
};

export default Layout;