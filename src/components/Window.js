import { useState } from "react";
import "./styling/Window.css";

export default function Window(props) {
  const [visible, setVisible] = useState(true);

  return (
    <div className="Window">
      <div className="titlebar">
        <p className="title">Title</p>
        <div className="window-sizer">
          <div className="minimalize">
            <p>─</p>
          </div>
          <div className="maximalize">
            <p>◻</p>
          </div>
          <div className="close">
            <p>╳</p>
          </div>
        </div>
      </div>
      <div className="app-container">{props.children}</div>
    </div>
  );
}
