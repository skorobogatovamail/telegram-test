import React from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App(): JSX.Element {
  const onClose = () => {
    tg.close();
  };
  return (
    <div className="App">
      Work{' '}
      <button onClick={onClose} type="button">
        Закрыть
      </button>
    </div>
  );
}

export default App;
