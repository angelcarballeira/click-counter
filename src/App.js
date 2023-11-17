import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Counter } from './components/Counter';
import freeCodeCampLogo from './images/freecodecamp-logo.png';

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const clickHandler = () => {
    setNumClicks(numClicks + 1);
  };

  const resetCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img
          alt='Log de freeCodeCamp'
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
        />
      </div>

      <div className='main-container'>
        <Counter numClicks={numClicks} />

        <Button text='Click' isClickButton={true} clickHandler={clickHandler} />

        <Button
          text='Reiniciar'
          isClickButton={false}
          clickHandler={resetCounter}
        />
      </div>
    </div>
  );
}

export default App;
