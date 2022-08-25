import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import Waves from '../../WaveMotion/Waves/Waves';
import PausePlay from '../../WaveMotion/PausePlay/PausePlay';
import { AppContext } from '../../../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  
  //Form State
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [existingUser, setExistingUser] = useState()
  const [existingUserText, setExistingUserText] = useState('userDoesNotExist')
  
  const navigate = useNavigate()
  //Import Context
  const { 
      setNavbar,
      createForm, setCreateForm,
      loginForm, setLoginForm
  } = useContext(AppContext)
  
  //Form Submission Functions
  function createAccountSubmit(e){
    e.preventDefault();
    if(e.target.password.value !== e.target.confirmPassword.value){
      alert('Passwords do not match')
    }
    else if(existingUser){
      alert('Username already exists. Please create a unique username to proceed.')
    } else {
      const submitUsername = e.target.username.value;
      const submitPassword = e.target.password.value;
      localStorage.setItem('user', e.target.username.value)
      axios.post('https://nift-backend-two.herokuapp.com/user', {
        username: submitUsername,
        password: submitPassword
      })
      .then()
      .catch(console.error)
    }
  }
  
  function loginToAccount(e){
    e.preventDefault()
    axios.post(`https://nift-backend-two.herokuapp.com/signin`, {
      username: e.target.username.value,
      password: e.target.password.value
    })
      .then(res => {
        if(res.data.token){
          localStorage.setItem('username', e.target.username.value)
          navigate('/learn', {replace:true})
        } else{
          console.log(res.data)
        }
      })
      .catch(console.error)
  }

  //Check database for username to confirm it's not already in use
  useEffect(()=>{
    axios.get('https://nift-backend-two.herokuapp.com/users')
      .then(res => {
        const result = res.data.filter((item)=>{
          return item.username === username
        })
        if(result.length>0){
          setExistingUser(true)
        } else{
          setExistingUser(false)
        }
      })
      .catch(console.error)
  }, [username])

  useEffect(()=>{
    if(existingUser===false){
      setExistingUserText('userDoesNotExist')
    } else {
      setExistingUserText('userExists')
    }
  },[existingUser])


  //Form Variables
  const createAccount = (
        <form className={createForm} onSubmit={createAccountSubmit}>
          <div>
            <b>
            Say "hello" to the future 
            </b><br></br>
            by creating a free account <br></br>
            to start learning about NFTs. <br></br>
            <br></br>
            <i>Already have an account? <b className='clickable-link' onClick={()=>{
              setCreateForm('Login-form hide')
              setLoginForm('Login-form')
            }}><u>Login</u></b></i>
          </div>

          <br></br>
          <h2>CREATE <b>ACCOUNT</b></h2>
          <br></br>
          <label htmlFor='username'>
            USERNAME
          </label><br></br>
          <input type='text' id='username' name='username'
          onChange={e=>setUsername(e.target.value)}
          ></input><br></br>
          <i className={existingUserText}>username already in use</i><br></br>
          <label htmlFor='password'>
            PASSWORD
          </label><br></br>
          <input type='password' id='password' name='password'
          ></input><br></br>
          <br></br>
          <label htmlFor='confirmPassword'>
            CONFIRM PASSWORD
          </label><br></br>
          <input type='password' id='confirmPassword' name='confirmPassword'></input><br></br>
          <br></br>
          <button type='submit'>SUBMIT</button>
        </form>
  )

  const loginAccount = (
    <form className={loginForm} onSubmit={loginToAccount}>
            <i>New? <b className='clickable-link' onClick={()=>{
              setCreateForm('Login-form')
              setLoginForm('Login-form hide')
            }}><u>Create an account</u></b></i>
            <br></br>
            <br></br>
          <h2>LOGIN TO <b>ACCOUNT</b></h2>
          <br></br>
          <label htmlFor='username'>
            USERNAME
          </label><br></br>
          <input type='text' id='username' name='username'
          onChange={e=>setUsername(e.target.value)}
          ></input><br></br>
          <br></br>
          <label htmlFor='password'>
            PASSWORD
          </label><br></br>
          <input type='password' id='password' name='password'
          ></input><br></br>
          <br></br>
          <button type='submit'>SUBMIT</button>
        </form>
  )


  //Animation on page load
  useEffect(()=>{
    setNavbar('Navbar-page hidden')
  })




  return (
      <div className='Login-page'>
        <div className='Login-container'>
        {createAccount}
        {loginAccount}
        </div>
        <Waves />
        <PausePlay />
      </div>
    );
  };
  
  export default Login;