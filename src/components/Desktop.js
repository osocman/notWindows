import './styling/Desktop.css'
import { useState } from "react";
import Shortcut from './Shortcut';

export default function Desktop({ theme, windows }) {
  const [shortcuts, setShortcuts] = useState([{
    text: 'Explorer', 
    img: `/defaultResources/explorerLogo.png`,
    appName: 'explorer',
  },
  {
    text: 'Calculator', 
    img: `/defaultResources/calculatorLogo.png`,
    appName: 'calculator',
  },
  ])

  const defaultStyling = {
    backgroundImage: 'url(/defaultResources/defaultBackground.jpg)'
  }

  const shortcutElements = shortcuts.map((shortcut) => <Shortcut app={shortcut} />)

  return (
    <div className="Desktop" style={defaultStyling}>
      {shortcutElements}
    </div>
  )
}