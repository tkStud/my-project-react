import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Button from './components/Button';


const theme = {
  brand: '#5352ed',
  neutral100: '#fff'
}

function App() {

 
  
  return (
    <>
      <Header/>
      <div className="App">
      <ThemeProvider theme={theme}>
        <Button />
      </ThemeProvider>
    </div>
    </>
  );
}

export default App;
