import React, { useEffect } from 'react'
import './App.css'

const App = () => {
  const [advice, setAdvice] = React.useState('Take Action')
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(null)

  const URL = 'https://api.adviceslip.com/advice'

  useEffect(() => {    
    console.log("advice:", advice)
    console.log("error",error)
    console.log("loading:", loading)},
  [advice,error,loading])

  const getAdvice = async() => {
    try{
      setLoading(true)
      setError(null)
      const res = await fetch(URL)
      const data = await res.json()
      console.log(data)
      setAdvice(data.slip.advice)
      setLoading(false)

    } catch(error){
      console.log(error)
      setError(error);
    }
  }

  return (
    <div className='main-container'>
      <div className="advice-card">
        <h1>Random Advice</h1>
        <ul>
          <li>"{advice}"</li>
        </ul>
        <button onClick={getAdvice}>Get Advice</button>
      </div>
    </div>
  )
}

export default App