import * as React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from "../assets/logo.svg";

const HeaderComponent = (): JSX.Element => {

  const { pathname } = useLocation();
  const selectedIndex = pathname === '/work' ? 0 : pathname === '/resume' ? 1 : 2;

  return (
    <header>
      <Link style={{flex: 1, display: 'flex'}} to='/work'>
        <div style={{height: 45, flex: 1, display: 'flex'}}>
          <Logo style={{alignSelf: 'flex-start'}}/>
        </div>
      </Link>
      <div className='header-buttons-container'>
        <div style={{display: 'flex'}}>
          <Link className='header-link'style={{color: selectedIndex === 0 ? '#080A0D' : '#A6A6A6'}} to={"/work"}>
            Work
          </Link>
          <Link className='header-link' style={{color: selectedIndex === 1 ? '#080A0D' : '#A6A6A6'}} to={"/resume"}>
            Resume
          </Link>
          <Link className='header-link' style={{color: selectedIndex === 2 ? '#080A0D' : '#A6A6A6'}} to={"/contact"}>
            Contact
          </Link>
        </div>
      </div>
      <div style={{flex: 1}}></div>
    </header>
  );
};

export default HeaderComponent;
