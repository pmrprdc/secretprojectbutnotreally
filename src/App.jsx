import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 const [leftDigit, setLeftDigit] = useState(0)
 const [rightDigit, setRightDigit] = useState(0)
 const [age, setAge] = useState(null)
 const [displayMessage, setDisplayMessage] = useState("")
 
  const buttons1 = [];
  const buttons2 = [];

  function buttonClickHandler(e) {
    if(e.target.name === "0 to 9"){

      setLeftDigit(e.target.value)
    } else if (e.target.value >= 10) {
      setLeftDigit(e.target.value/10)
    } else if(e.target.value < 10) {
      setRightDigit(e.target.value)
    }

  }

  for(let i=0; i<10; i++) {

    buttons1.push({
      name: `${i*10} to ${(i*10)+9}`,
      value: i*10,
      key: i,
      digit: "left"
    })

    buttons2.push({
      name: i,
      value: i,
      key: i
    })
  }

  useEffect(()=>{
    setAge((leftDigit + rightDigit))
  },[leftDigit, rightDigit])

  const submitHandler = () => {
    if(age<10) {
      setDisplayMessage(`You are ${age*365} days old`)

    }else{
    const dayInAges = age*365;
    setDisplayMessage(`You are ${dayInAges} days old!`)
    }
  }

  const restartHandler =() => {
    setAge(null)
    setLeftDigit(0)
    setRightDigit(0)
    setDisplayMessage("")
  }
  return (
    <div className="App">
      {displayMessage === "" && <h1>{leftDigit===0 ? "_": leftDigit}{ rightDigit===0 ? "_":rightDigit}</h1>}
      <h1>{displayMessage}</h1> 
     {(leftDigit === 0 || rightDigit===0) && <h1>How old are you</h1>}
      {!age && buttons1.map(btn=>{
        return (<button onClick={buttonClickHandler} name ={ btn.name}key={btn.key} digit={btn.digit} value={btn.value}>{btn.name}</button>)
      })}
      <br></br>
      {(leftDigit !==0 || rightDigit !==0) && (age<10 && displayMessage==="") && buttons2.map(btn=>{
        return (<button onClick={buttonClickHandler}key={btn.key} value={btn.value}>{btn.name}</button>)
      })}
 
     {displayMessage === "" && <button onClick={submitHandler}>Submit</button> }
     {displayMessage !=="" && <button onClick={restartHandler}>Restart</button>}
    </div>
  )
}

export default App
