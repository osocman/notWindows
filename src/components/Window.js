import { useState } from 'react'

export default function Window(props) {
  const [visible, setVisible] = useState(true);

  return (
    <div className='Window'>
      <div className="titlebar">
      </div>
      <div className='app-container'>
        {props.children}
      </div>
    </div>
  )
}

