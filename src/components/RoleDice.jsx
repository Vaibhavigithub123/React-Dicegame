import React, { useState } from 'react'
import './RoleDice.css'
import { Toaster, toast } from "sonner";

function RoleDice({selectedNumber, setSelectedNumber,score, setScore}) {

  const [currentDice, setCurrentDice] = useState(1)
  const [showRules, setShowRules] = useState(false)
  console.log(selectedNumber)
  // console.log(setSelectedNumber)

    const randomNumber = (max,min)=>{
      console.log( Math.floor(Math.random()* (max-min) +min))
        return Math.floor(Math.random()* (max-min) +min)
        
    }

  const getDice = ()=>{
    
    if(!selectedNumber) {
         toast.error("You have to select a Number");
      return
    };
    const randomDice = randomNumber(1,7)
    setCurrentDice((prev)=> randomDice)

    if(selectedNumber === randomDice){
      setScore((prev)=> prev + randomDice)
    }else{
      setScore((prev)=> prev - 2)
    }
  }

  const resetScore = ()=>{
    setSelectedNumber('')
    setScore(0)
  }

  const showrules = ()=>{
    setShowRules(!showRules)
  }
  return (
    <div className='diceimg'>
       <Toaster richColors position="top-right" />
        <div className='dice' onClick={getDice}>
            <img src={`/asset/dice_${currentDice}.png`} width="200px"/>
        </div>
        <p>Click on dice to roll</p> 
        <button className='reset' onClick={resetScore}>Reset Score</button>   
        <button className='rules' onClick={showrules} >Show Rules</button>  


        {showRules? (<div className='rulesdiv'>
              <h1>How to play Dice game?</h1>
              <p>Select any number</p>
              <p>Click on dice image</p>
              <p>After clicking on dice if selected number is equal to dice number you will get same point as dice</p>
              <p>If you get wrong guess then 2 point will be dedcuted</p>
          </div> ): ""}
        
    </div>
  )
}

export default RoleDice