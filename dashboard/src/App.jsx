import { useState } from 'react'
import chartOperation from './Components/ChartOperation.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <chartOperation/>
    </>
  )
}

export default App
