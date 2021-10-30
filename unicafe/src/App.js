import React, { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return(
    <>
    <p> {text}  {value} </p>
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {

  const all = good + neutral + bad

  const average = all/3

  const percentage = (good/all) *100


  if (all === 0){
    return(
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return(
    <>
    <h1>statistics</h1>

    <StatisticLine text = {"good"} value = {good} />
    <StatisticLine text = {"neutral"} value = {neutral} />
    <StatisticLine text = {"bad"} value = {bad} />
    <StatisticLine text = {"all"} value = {all} />
    <StatisticLine text = {"average"} value = {average} />
    <StatisticLine text = {"positive"} value = {percentage} />
    </>
  )
  
}

const Button=({buttonClicked, text})=>{
  return(
    <button onClick={buttonClicked}>{text}</button>
  )

}

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
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button buttonClicked={handleGoodClick} text={"good"}/>
      <Button buttonClicked={handleNeutralClick} text={"neutral"}/>
      <Button buttonClicked={handleBadClick} text={"bad"}/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App