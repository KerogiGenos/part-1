import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick=()=>{


    setGood(6)
  }

  const handleNeutralClick=()=>{


    setNeutral(2)
  }

  const handleBadClick=()=>{


    setBad(1)
  }

  const all = good + neutral + bad

  const average = all/3

  const percentage = (good/all) *100

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick = {handleGoodClick}>good</button>
      <button onClick = {handleNeutralClick}>neutral</button>
      <button onClick = {handleBadClick}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>

      <p>All {all}</p>
      <p>Average {average}</p>
      <p>Positive {percentage}</p>
    </div>
  )
}

export default App