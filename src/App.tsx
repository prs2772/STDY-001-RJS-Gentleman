import { useState } from 'react'
import './App.css'
import { UseState} from './components'

function App() {
  const[data, setData] = useState([])

  return (
    <>
      <UseState />
    </>
  )
}

export default App
