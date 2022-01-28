import React, { useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';

function App() {
  const [showPara, setShowPara] = useState(false);

  const toggleParaHandler = () => {
    setShowPara((prevShowPara) => !prevShowPara);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showPara && <p>This is new!</p>}
      <Button onClick={toggleParaHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
