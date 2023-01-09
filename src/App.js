import './App.css';
import { useState } from 'react';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import Window from './components/Window';

function App() {
  const [windows, setWindows] = useState([]);

  const [theme, setTheme] = useState({
    backgroundImage: `${process.env.PUBLIC_URL}/src/resources/windows-10-bg-default.jpg`
  });

  const createWindow = (app) => {
    setWindows((prevWindows) => {
      return [...prevWindows, <Window>{app}</Window>]
    });
  };

  return (
    <div className="App">

      <Desktop theme={theme} windows={windows} />

      <Taskbar theme={theme} windows={windows} />

    </div>
  );
};

export default App;
