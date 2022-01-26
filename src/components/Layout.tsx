import * as React from 'react';
import HeaderComponent from './HeaderComponent';

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
      <footer style={{height: 150}}></footer>
    </div>
  )
};

export default Layout;