import {useRef, useState} from 'react'
import Hader from './Hader'
import { checkValidates } from '../utils/Validate'

const Login = () => {
 
 const [isSignIn,setIsSignIn]=useState(true)
 const email=useRef(null)
 const password=useRef(null)

 const signInForm=()=>{
 setIsSignIn(!isSignIn)
 
 
 }

 const handleButtonClick=()=>{
     const message=checkValidates(email.current.value,password.current.value)
     console.log(message)
 }

 
  return (
    <div>
      <Hader/>

      <form  onSubmit={(e)=>e.preventDefault}
      className='m-3/12 absolute  p-10 bg-black my-36 mx-auto right-10 left-15 text-white rounded-lg bg-opacity-70'>
 
      <h1 className="font-bold text-3xl py-4">
      {isSignIn ?'sign In' :'sign Up'}</h1>
      {!isSignIn &&(<input type ="text" placeholder='firstname'className="p-4 my-4 w-full bg-gray-500"/>)}
      
       <input  ref={email}type="text" placeholder='Email'className="p-4 my-4 w-full bg-gray-500"/>
        <input ref={password} type='Password' placeholder='Password'className="p-4 my-4 w-full bg-gray-500"/>
        
        <button className='p-4 my-6 bg-red-700 w-full' onClick={handleButtonClick}>
        {isSignIn ?'sign In' :'sign Up'} </button>
        <p className="p=4" onClick={signInForm}>{isSignIn ? "New To Netflix ? sign Up now" : "already register?Sign in now."}</p>
      </form>
    </div>
    
  )
}
 
export default Login
