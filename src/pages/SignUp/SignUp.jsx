import React, { useEffect, useState } from 'react'
import './SignUp.css'
import loginimg from '../../assets/login.png'
import { Link } from 'react-router-dom'
import { Toaster, toast } from "sonner";


function SignUp() {

  const [inputValues, setInputValues] = useState({
    fname: "",
    email: "",
    date:"",
    password: "",
  })

  const [error, setErrorValues]= useState({})
  const [isSubmit, setisSubmit] = useState(false)
  const [data, setData] = useState([])

  const getData = (e)=>{
    const {name, value} = e.target;
    setInputValues({...inputValues, [name]:value})
    
  }

  const ValidateForm = (val)=>{
      const errors={}
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

      if(!val.fname){
        errors.fname = 'Username is required!'
      }
      if(!val.email){
        errors.email = "Email is required!"
      }else if(!regex.test(val.email)){
        errors.email = "This is not a valid email format!"
      }
      if(!val.date){
        errors.date = "Date is required!"
      }
      if(!val.password){
        errors.password = 'password is required!'
      } else if(val.password.length < 4){
        errors.password = 'Password must be more than 5 characters'
      } 

      return errors;
  }

  const submitData = (e)=>{
      e.preventDefault();
      setErrorValues(ValidateForm(inputValues))
      setisSubmit(true)

      const getlocalstored = localStorage.getItem("User");
      // console.log(getlocalstored)

      if(getlocalstored && getlocalstored.length){
      const signupusercheck = JSON.parse(getlocalstored)
      // console.log(signupusercheck)

      const signupuser = signupusercheck.filter((element, index)=>{
        return (  
          element.email === inputValues.email && 
          element.password === inputValues.password
        )
      })
      // console.log(signupuser)
      toast.info('User already exist, Please Sign In!')
    }
  }

  useEffect(()=>{
    if(Object.keys(error).length === 0 && isSubmit){
      // console.log("Form submitted succesfully")
      localStorage.setItem("User",JSON.stringify([...data, inputValues]))
      setInputValues({
        fname: "",
        email: "",
        date:"",
        password: "",
      })
    }
  },[error, isSubmit])
  
  return (
    
    <main>
      <Toaster richColors position="top-center" />

    <div className='right-Signupform'>
        <form>
          <h2>Sign Up</h2>
          <input type='text' placeholder='Username' name='fname' value={inputValues.fname} onChange={getData}/>
          <p style={{color: 'red'}}>{error.fname}</p>
          <br/>

          <input type='email' placeholder='Email' name='email' value={inputValues.email} onChange={getData}/>
          <p style={{color: 'red'}}>{error.email}</p>
          <br/>

          <input type='date' name='date' value={inputValues.date} onChange={getData} />
          <p style={{color: 'red'}}>{error.date}</p>
          <br/>

          <input type='password' placeholder='Password' name='password' value={inputValues.password} onChange={getData}/>
          <p style={{color: 'red'}}>{error.password}</p>
          <br/>

            <div className='checkbox'>
            <input type='checkbox'/>
            <p>Remember Me</p>
            </div>
            
        </form>
            <button className='signupbtn' onClick={submitData}>Submit</button>
            <br/>
            <p>Already Have an Account <Link to="/login">SignIn</Link></p>
      </div>

      <div className='left-img'>
          <img src={loginimg}/>
      
      </div>
   
     
      
    </main>
  )
}

export default SignUp