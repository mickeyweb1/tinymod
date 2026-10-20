import { useState } from 'react'
import './App.css'
import LockPage from './Pages/lockpage/lockpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <LockPage />
  )
}

export default App
