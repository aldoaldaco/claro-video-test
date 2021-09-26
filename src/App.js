import { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Claro from './components/Claro.js';





function App() {

  const [visible, setVisible] = useState(false);
  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <div className="App">
      { visible ? <Claro onCloseModal={closeModal}/> : <Button onClick={openModal} variant="contained">Open EPG</Button>}
    </div>
  );
}

export default App;
