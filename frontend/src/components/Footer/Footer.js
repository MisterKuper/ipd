import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='left-section'>
          <p className='text'>© 2025, Praca inżynierska na temat "Projekt i implementacja aplikacji webowej z zastosowaniem technologii ReactJS dla rozwijania logicznego myślenia, pamięci oraz spostrzegawczości dzieci w wieku przedszkolnym".</p>
          <p className='text autor'>Autor: Roman Kolishenko, Akademia Finansów i Biznesu Vistula, 2025 rok.</p>
        </div>

        <div className='right-section'>
          <Link to="/privacy-policy" target="_blank" className='link'>Polityka prywatności</Link>
          <Link to="/terms" target="_blank" className='link'>Warunki użytkowania</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer
