import React from 'react';
import './styles.css';
import '../../../node_modules/flag-icons/css/flag-icons.min.css';
import { MdBrightness5, MdBrightness3 } from 'react-icons/md';

import ToggleSwitch from './components/Switch';
import { HandlePage } from '../../App';

interface HeaderProps {
  changePages: HandlePage;
  changeLanguages: () => void;
  language: boolean;
  isDark: boolean;
  changeTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ changePages, changeLanguages, language, isDark, changeTheme }) => {

  const pt = ['Home', 'Projetos', 'Sobre'];
  const en = ['Home', 'Projects', 'About'];


  return(
    <div className='header'>
      <h1 className='name'>
        <span className='gui'>Gui</span>Ferreira
      </h1> 
      <div className='options'>
        <h2 className='option' onClick={() => changePages('hero')}>{!language ? pt[0] : en[0]}</h2>
        <h2 className='option' onClick={() => changePages('projects')}>{!language ? pt[1] : en[1]}</h2>
        <h2 className='option' onClick={() => changePages('about')}>{!language ? pt[2] : en[2]}</h2>

        <div className='switches'>

          <div className='toggle'>
            <span className='fi fi-br'></span>
            <ToggleSwitch changeState={changeLanguages} />
            <span className='fi fi-us'></span>
          </div>

          <div className='toggle'>
            <MdBrightness5 className='themes' />
            <ToggleSwitch changeState={changeTheme} currentState={isDark} />
            <MdBrightness3 className='themes' />
          </div>

        </div>        
      </div>
    </div>
  )
}

export default Header;