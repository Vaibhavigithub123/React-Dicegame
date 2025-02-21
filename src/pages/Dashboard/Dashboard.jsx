import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import dice from '../../assets/dice.png'
import { useNavigate } from "react-router-dom";


function Dashboard() {
  const Navigate = useNavigate();
  const [loginData, setLogindata] =useState([])
  const [isGamestarted, setisGamestarted] = useState(false)

  const getUserDashboard = ()=>{
      const getUser = localStorage.getItem("User_login")
      // console.log(getUser)

      if(getUser && getUser.length){
        const user = JSON.parse(getUser);
        setLogindata(user)
      }
  }

  const handleLogout = ()=>{
    localStorage.removeItem("User_login")
    Navigate("/")
  }

  useEffect(()=>{
    getUserDashboard()
  },[])


  const toggleGameStart = ()=>{
    setisGamestarted(!isGamestarted)
    Navigate("/game")
  }

  return (
    

    <>
    {loginData.length === 0 ?   ( <h1 >Please SignUp first!</h1>) : ( 
   <div>  

    <div className='heading'>  
     <h1 >Welcome, {loginData[0].fname}!</h1> 
     <button onClick={handleLogout} className='userlogin'>Logout</button>
     </div>
   
    
    <div className='dashboard'>

      <div className='dashboard-left'>
        <img src={dice}/>
      </div>

      <div className='dashboard-right'>
          <h1>DICE GAME</h1>
          <button onClick={toggleGameStart}>Play</button>
      </div>

    </div>

    </div>
    ) }

    </>
  )
}

export default Dashboard