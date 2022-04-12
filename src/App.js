import { useState } from 'react';
import MainPage from './pages/MainPage';
import {UserToggle} from './hooks';

function App() {

  // const [isDarkMode, setIsDarkMode] = useState(false);
  let currentMode = UserToggle(true);

  const toggleDarkMode = () => {
    currentMode =UserToggle(currentMode);
  }

  // UserToggle(isDarkMode)


  return (
    <div className={currentMode ? "dark" : "light"}>
      <button onClick={toggleDarkMode}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;
