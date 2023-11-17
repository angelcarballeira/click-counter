import React from 'react';
import '../styles/Button.css';
function Button({ text, isClickButton, clickHandler }) {
  return (
    <button
      className={isClickButton ? 'btn-click' : 'btn-reset'}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
}

export { Button };
