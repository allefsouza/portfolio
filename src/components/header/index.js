import React, { useState } from 'react';
import { DivHeader, Name } from './styled';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <DivHeader className={menuOpen ? 'menu-open' : ''}>
      <Name>Allef Souza</Name>
      <label htmlFor='check' onClick={toggleMenu}>
        <i></i>
        <i></i>
      </label>
      <nav className={menuOpen ? 'open' : ''}>
        <a>About me</a>
        <a>Skills</a>
        <a>Projects</a>
        <a>Contact</a>
      </nav>
    </DivHeader>
  );
}
