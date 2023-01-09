import "./styling/Desktop.css";
import { useContext, useState } from "react";
import Shortcut from "./Shortcut";
import WindowsContext from "../contexts/WindowsContext";

export default function Desktop({ theme }) {
  const { windows } = useContext(WindowsContext);

  const [shortcuts, setShortcuts] = useState([
    {
      text: "Explorer",
      img: `/defaultResources/explorerLogo.png`,
      appName: "explorer",
    },
    {
      text: "Calculator",
      img: `/defaultResources/calculatorLogo.png`,
      appName: "calculator",
    },
  ]);

  const defaultStyling = {
    backgroundImage: "url(/defaultResources/defaultBackground.jpg)",
  };

  const shortcutElements = shortcuts.map((shortcut) => (
    <Shortcut key={shortcut.appName} app={shortcut} />
  ));

  return (
    <div className="Desktop" style={defaultStyling}>
      {shortcutElements}
      {windows}
    </div>
  );
}
