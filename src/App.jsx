import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 const [leftDigit, setLeftDigit] = useState(0)
 const [rightDigit, setRightDigit] = useState(0)
 
  const buttons1 = [];
  const buttons2 = [];

  function buttonClickHandler(e) {
    if(e.target.value < 10) {
      setRightDigit(e.target.value)
    } else{
      setLeftDigit(e.target.value/10)
    }
  }

  for(let i=0; i<10; i++) {

    buttons1.push({
      name: `${i*10} to ${(i*10)+9}`,
      value: i*10,
      key: i
    })

    buttons2.push({
      name: i,
      value: i,
      key: i
    })
  }




  return (
    <div className="App">
      <h1>{leftDigit}{rightDigit}</h1>
      <h1>How old are you</h1>
      {buttons1.map(btn=>{
        return (<button onClick={buttonClickHandler} key={btn.key} value={btn.value}>{btn.name}</button>)
      })}
      <br></br>
      {buttons2.map(btn=>{
        return (<button onClick={buttonClickHandler}key={btn.key} value={btn.value}>{btn.name}</button>)
      })}
    </div>
  )
}

export default App
