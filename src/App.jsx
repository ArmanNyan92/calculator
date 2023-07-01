import React, { useState } from 'react'
import "./App.css"

export default function App() {
const [result, setResult] = useState("")

const handleClick = (e) => {
	setResult(result.concat(e.target.value))
} 

const clearDisplay = (e) => {
	setResult("")
}

const calculated = () => {
	setResult(eval(result).toString())
}

  return (
	<div className='calc'>
		<input type="text" className='answer' name="text" id="text" placeholder='0' value={result}/>
		<input type='button' value={"0"} className='button' onClick={handleClick}/>
		<input type='button' value={"1"} className='button' onClick={handleClick}/>
		<input type='button' value={"2"} className='button' onClick={handleClick}/>
		<input type='button' value={"3"} className='button' onClick={handleClick}/>
		<input type='button' value={"4"} className='button' onClick={handleClick}/>
		<input type='button' value={"5"} className='button' onClick={handleClick}/>
		<input type='button' value={"6"} className='button' onClick={handleClick}/>
		<input type='button' value={"7"} className='button' onClick={handleClick}/>
		<input type='button' value={"8"} className='button' onClick={handleClick}/>
		<input type='button' value={"9"} className='button' onClick={handleClick}/>
		<input type='button' value={"+"} className='button' onClick={handleClick}/>
		<input type='button' value={"-"} className='button' onClick={handleClick}/>
		<input type='button' value={"/"} className='button' onClick={handleClick}/>
		<input type='button' value={"*"} className='button' onClick={handleClick}/>
		<input type='button' value={"."} className='button' onClick={handleClick}/>
		<input type='button' value={"%"} className='button' onClick={handleClick}/>
		<input type='button' value={"DEL"} className='button button1' onClick={clearDisplay}/>
		<input type='button' value={"="} className='button button1' onClick={calculated}/>
	</div>
  )
}
