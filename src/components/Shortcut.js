import './styling/Shortcut.css'

export default function Shortcut({ app }) {

  return (
    <div className='Shortcut'>
      <img src={app.img} alt={app.appName}/>
      <p>{app.text}</p>
    </div>
    )
}