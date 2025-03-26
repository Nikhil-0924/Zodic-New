import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ZodiacApp from './components/ZodiacApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ZodiacApp />
      </div>
    </>
  )
}

export default App
