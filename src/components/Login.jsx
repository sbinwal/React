import React, { useRef, useState } from 'react'
import Header from './Header'
import { ApplyValidation } from '../utils/validation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../constants/constants';
import Footer from './Footer';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef()
  const email = useRef()
  const password = useRef()

  const toggleForm = () => {

    setIsSignInForm(!isSignInForm)
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    const errorMessage = ApplyValidation(name?.current?.value, email?.current?.value, password?.current?.value, isSignInForm)
    setError(errorMessage)
    if (errorMessage) return

    //For SignUp

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log("user", user)
          updateProfile(auth.currentUser, {
            displayName: name.current.value, photoURL: USER_AVATAR
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth?.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage)
          console.log("errormessage", errorMessage)
          // ..
        });

    }

    //For Sign In

    if (isSignInForm) {
      signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage)
        });
    }




  }

  // const changeEmail = ()=>{

  // }
  return (
    <div>
      <Header />
      <div className='relative'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt='background' className='sm:h-screen md:h-[50rem]' />
        <div className='bg-shadeblack absolute xl:left-[30%] md:left-[21%] sm:w-[80%] sm:left-[10%] md:px-0 opacity-90 sm:py-6 md:py-16 rounded-xl md:w-[28rem] top-[20%]'>
          <div className='md:mx-auto sm:mx-auto md:w-[20rem] sm:w-[17rem]'>
            <div className='text-4xl font-bold'>
              <h1 className='text-white sm:text-3xl md:text-4xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            </div>
            <div className=''>
              <form className='mt-8' onSubmit={handleSubmit}>
                {!isSignInForm &&
                  <div>
                    <input type="text" ref={name} placeholder='Name' className='rounded-md md:px-5 sm:px-3 w-full sm:py-2 md:py-4' />
                  </div>
                }
                <div className='my-6'>
                  <input type="text" ref={email} placeholder='Email' className='rounded-md px-5 w-full md:py-4 sm:py-2' />
                </div>
                <div>
                  <input type="password" ref={password} placeholder='Password' className='rounded-md px-5 w-full md:py-4 sm:py-2' />
                </div>
                <p className='text-red-600'>{error}</p>
                <div className='mt-6'>
                  <button className='bg-red-500 w-full text-white text-xl font-semibold rounded-md md:py-3 sm:py-2' type="submit">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                </div>

                {isSignInForm &&
                  <div className='flex justify-between my-3'>
                    <div className='flex'>
                      <input type='checkbox' className='mx-1' />
                      <div className='text-[#b3b3b3]'>Remember Me</div>
                    </div>
                    <div className='text-[#b3b3b3]'>Need Help?</div>
                  </div>
                }
                <div className='my-8'>
                  <div className='flex my-3'>
                    <h3 className='text-lightblack'>{isSignInForm ? "New to Netflix" : "Already a Member"}</h3>
                    <h3 className='text-white mx-1 cursor-pointer' onClick={toggleForm}>{isSignInForm ? "Sign Up Now" : "Sign In Now"}</h3>
                  </div>

                  <div className='text-lightwhite text-sm'>
                    <h3 className=''>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span className='mx-1 text-blue-700'>Learn more.</span></h3>
                  </div>
                </div>
              </form>
            </div>


          </div>

        </div>
      </div>

      <Footer/>


    </div>
  )
}

export default Login