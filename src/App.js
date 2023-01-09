import "./App.css";
import { useState } from "react";
import Desktop from "./components/Desktop";
import Taskbar from "./components/Taskbar";
import { WindowsProvider } from "./contexts/WindowsContext";

function App() {
  const [theme, setTheme] = useState({
    backgroundImage: `${process.env.PUBLIC_URL}/src/resources/windows-10-bg-default.jpg`,
  });

  return (
    <div className="App">
      <WindowsProvider>
        <Desktop theme={theme} />
        <Taskbar theme={theme} />
      </WindowsProvider>
    </div>
  );
}

export default App;
