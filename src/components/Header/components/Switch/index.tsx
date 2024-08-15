import React from 'react';
import './styles.css';

interface ToggleProps {
  changeState: () => void;
  currentState?: boolean; 
}

// Tentar mudar o switch automatico detectando o padrão

const ToggleSwitch: React.FC<ToggleProps> = ({ changeState, currentState }) => {
  return(
    <div>
      <label className='switch'>
        <input type='checkbox' onClick={() => changeState()} checked={currentState} />
        <span className='slider'></span>
      </label>
    </div>
  )
}

export default ToggleSwitch;