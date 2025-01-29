import { useState } from 'react'
import './App.css'
import { Button } from './components'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Paris')
  const countMore = () => {
    setCount((count) => count + 1)
  }

  return (
    <>
      <Button label={`Value: ${count}`} parentMethod={countMore} />
      <p>{name}</p>
      <Button label={`Change Name`} parentMethod={() => setName('a')} />
    </>
  )
}

export default App
