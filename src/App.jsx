import React, { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';

function App() {
  const [isCardVisible, setCardVisibility] = useState(false);

  const handleCancelButtonClick = () => {
    console.log("Cancel button clicked");
    setCardVisibility(false);
  };

  return (
    <>
      {!isCardVisible && (
        <Button
          text="Click me"
          filled={true}
          onClick={() => setCardVisibility(true)}
        />
      )}

      {isCardVisible && <Card onCancel={handleCancelButtonClick} />}
    </>
  );
}

export default App;
