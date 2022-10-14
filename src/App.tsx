import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function Hello(){
  return (
    <div>
      Hey! Welcome to my blog!
    </div>
  );
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Hello />
    </div>
  )
}

export default App
