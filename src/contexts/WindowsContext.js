import { useState, createContext } from "react";
import Window from "../components/Window";
import PlaceholderApp from "../components/apps/PlaceholderApp";

const WindowsContext = createContext({});

export function WindowsProvider(props) {
  const placeHolderWindow = (
    <Window>
      <PlaceholderApp />
    </Window>
  );
  const [windows, setWindows] = useState([placeHolderWindow]);

  const createWindow = (app) => {
    setWindows((prevWindows) => {
      return [...prevWindows, <Window>{app}</Window>];
    });
  };

  return (
    <WindowsContext.Provider
      value={{
        windows,
        setWindows,
        createWindow,
      }}
    >
      {props.children}
    </WindowsContext.Provider>
  );
}

export default WindowsContext;
