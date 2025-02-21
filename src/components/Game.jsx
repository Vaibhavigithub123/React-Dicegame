import React, { useState } from 'react'
import './Game.css'
import RoleDice from './RoleDice';

function Game() {


    const [selectedNumber, setSelectedNumber]= useState(null);
    const [score, setScore] = useState(0)
   
    const arrNumber = [1,2,3,4,5,6]

    // console.log(selectedNumber)


    
  return (

<>  

    <div className='header'>
       
        <div className='score'>
            <h1>{score}</h1>
            <p>Total Score</p>
        </div>

        <div className='left-choicediv'>
            <div className='choicebtns'> 
                {arrNumber.map((val, i )=>{
                    return <button key={i} 
                    onClick={()=>setSelectedNumber(val)}
                    className={selectedNumber === val ? 'selected': ''} >{val}</button>
                })}
                
            </div>

            <div className='choiceheading'>
                Select a Number
            </div>
        </div>
    </div>

    <RoleDice  selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} score={score} setScore={setScore}/>
</>

    

  )
}

export default Game