import React from 'react'
import Card from "./components/Card"

const App = () => {

  return (
    <div className='parent'>
      <Card user="Naman" age={18} />
      <Card user="aman" age={12} />
    </div>
  )
}

export default App
