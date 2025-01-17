import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CuidGenerator from './components/CuidGenerator'
import IsoDateGenerator from './components/IsoDateGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CuidGenerator />
      <IsoDateGenerator />
    </>
  )
}

export default App
