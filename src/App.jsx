import React from 'react';

import MainPage from './components/pages/MainPage';
import ThemeProvider from "./context/ThemeProvider";

function App() {
  return (
      <ThemeProvider>
        <MainPage/>
      </ThemeProvider>
  );
}

export default App;
