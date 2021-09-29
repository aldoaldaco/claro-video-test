import { useState, useMemo } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Modal from './components/Modal.js';
import Program from './components/Program.js';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';




function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: prefersDarkMode ? 'dark' : 'light',
      },
    }), [prefersDarkMode]);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <section className="App">
        { showModal ? 
          <Modal canClose onCloseModal={closeModal}><Program/></Modal> : 
          <Button onClick={openModal} size="large" variant="outlined">Open EPG</Button> 
        }
      </section>
    </ThemeProvider>
  );
}

export default App;
