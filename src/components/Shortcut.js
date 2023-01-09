import "./styling/Shortcut.css";
import { useContext } from "react";
import WindowsContext from "../contexts/WindowsContext";

export default function Shortcut({ app }) {
  const windows = useContext(WindowsContext);
  return (
    <div
      className="Shortcut"
      onDoubleClick={() => console.log("clicked shortcut")}
    >
      <img src={app.img} alt={app.appName} />
      <p>{app.text}</p>
    </div>
  );
}
