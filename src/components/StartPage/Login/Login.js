import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import Waves from '../../WaveMotion/Waves/Waves';
import PausePlay from '../../WaveMotion/PausePlay/PausePlay';
import { AppContext } from '../../../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  
  //Form State
  const [existingUser, setExistingUser] = useState()
  const [existingUserText, setExistingUserText] = useState('userDoesNotExist')
  
  const navigate = useNavigate()
  //Import Context
  const { 
      setNavbar,
      createForm, setCreateForm,
      loginForm, setLoginForm,
      username, setUsername
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
      localStorage.setItem('username', e.target.username.value)
      axios.post('https://nift-backend-two.herokuapp.com/user', {
        username: submitUsername,
        password: submitPassword
      })
      .then()
      .catch(console.error)
      navigate('/learn', {replace:true})
    }
  }
  
  function loginToAccount(e){
    e.preventDefault()
    setUsername(localStorage.getItem('username'))
    axios.post(`https://nift-backend-two.herokuapp.com/signin`, {
      username: e.target.username.value,
      password: e.target.password.value
    })
      .then(res => {
        if(res.data.token){
          localStorage.setItem('username', e.target.username.value)
          navigate('/learn', {replace:true})
        } else{
          alert(res.data)
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
          <i className={existingUserText}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="user-exists-x" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
          </svg>
            &nbsp;username already exists</i><br></br>
          <label htmlFor='createPassword'>
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