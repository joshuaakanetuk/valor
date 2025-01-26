import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CuidGenerator from './components/CuidGenerator'
import IsoDateGenerator from './components/IsoDateGenerator'
import SearchComponent from './components/SearchComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</h1>
      <CuidGenerator />
      <IsoDateGenerator />
      <SearchComponent />
    </>
  )
}

export default App
