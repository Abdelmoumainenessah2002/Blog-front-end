import React, { useState } from 'react';
import './header.css';
import HeaderLeft from './HeaderLeft';
import NavBar from './NavBar';
import HeaderRight from './HeaderRight';
const Header = () => {

    const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className="header">
        <HeaderLeft toggle={toggle} setToggle={setToggle} />
        <NavBar toggle={toggle} setToggle={setToggle} />
        <HeaderRight />
      </header>
      <div className="header-blank"></div>
    </>
  );
};

export default Header;