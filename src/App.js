import { useState } from "react"

const App = () => {
   const [FirstNumber, setFirstNumber] = useState("");
   const [SecondNumber, setSecondNumber] = useState("");
   const [Result, setResult] = useState("")
   const plus = () => {
      setResult(parseInt(FirstNumber) + parseInt(SecondNumber) )
   }
   const minus = () => {
      setResult(FirstNumber - SecondNumber)
   }
   const multiply = () => {
      setResult(FirstNumber * SecondNumber)
   }
   const divide = () => {
      setResult(FirstNumber / SecondNumber)
   }

   const handleFirst = (e) => {
      setFirstNumber(e.target.value)
   }
   const handleTwo = (e) => {
      setSecondNumber(e.target.value)
   }
   return(
      <div className="app"> 
      <div className="form">
         <input
         className="input"
          type="text"
          value={FirstNumber}
          onChange={handleFirst}
          placeholder="A"
          />
         <input
          className="input"
          type="text"
          value={SecondNumber}
          onChange={handleTwo}
          placeholder="B"
            />
         </div>  
         <div className="result__area">Результат: <div className="result">{Result}</div></div>
         <div className="buttons">
         <button onClick={plus} className="btn">+</button>
         <button onClick={minus} className="btn">-</button>
         <button onClick={multiply} className="btn">*</button>
         <button onClick={divide} className="btn">/</button>
         </div>
      </div>
      
   )
}

export default App