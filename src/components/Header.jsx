import React, { useEffect, useState } from 'react'
import { signOut, onAuthStateChanged } from "@firebase/auth";
import { auth } from '../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../constants/constants';
import { gptSuggestions, toggleButton } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
import { searchButton } from '../utils/searchSlice';


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showSignOutDropdown, setShowSignOutDropdown] = useState(false);

  const user = useSelector(store => store.user)
  const gptValue = useSelector(store => store.gpt)


  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate("/browse")
        
        // ...
      } else {

        dispatch(removeUser())
        navigate("/")
        // User is signed out
        // ...
      }
    });

    return () => unsubscribe();
  }, [])

  const handleSignOut = () =>{
     
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  const handleClick = () =>{
    dispatch(toggleButton())
    dispatch(searchButton(false))
    dispatch(gptSuggestions(null))
  }

  const handleChange = (e)=>{
          dispatch(changeLanguage(e.target.value))
  }

  const toggleSignOutDropdown = () => {
    setShowSignOutDropdown(!showSignOutDropdown);
  };
  return (
    
    <div className='z-10 absolute grid grid-cols-2 w-full pe-12 items-center shadow-black'>
        <img src={LOGO} width = {230} height={95} className={"opacity-100 sm:w-[150px] sm:h-[50px] md:w-[230px] md:h-[95px]"} alt='logo'/>
    
    {user &&
    <div className={"flex justify-self-end items-center"}>
      <div>
        <p className='text-white mx-2 sm:text-sm sm:hidden md:block py-1 px-[2px]'>{`Welcome, ${user?.displayName}`}</p>
      </div>
      {gptValue?.button &&
      <form>
      <select id="mySelect"  onChange={handleChange} className='md:px-1 md:py-[2px] sm:p-0 rounded border-2 border-white xl:p-[3px] bg-indigo-500 text-white'>
        {SUPPORTED_LANGUAGES?.map((item,index)=>{

          return(
           <option value={item?.identifier} className='w-6'>{item?.name}</option>
          )
           
        })}
        
      </select>
      </form>
}


      <button className='text-white md:mx-5 sm:mx-[10px] border-2 border-white xl:p-1 bg-indigo-500 sm:p-1 sm:text-sm  rounded' onClick={handleClick}>{gptValue?.button ? "Home" : "GPT Search"}</button>
      {/* <div>
      <img src= {user?.photoURL} width={40} height={40}  alt = "profile"/>
      </div>
      
      <button onClick={handleSignOut}>Sign Out</button> */}

<div className='relative'>
            <img
              src={user?.photoURL}
              width={40}
              height={40}
              alt='profile'
              onClick={toggleSignOutDropdown}
              className='cursor-pointer sm:w-[32px] sm:h-[26px] md:w-[40px] xl:h-[33px]'
            />
            {showSignOutDropdown && (
              <form className='absolute'>
                <button id="signOut" onClick={handleSignOut} className='p-1 bg-white  w-[5rem] border border-b-black'>
                 Profile
                </button>
                <button id="signOut" onClick={handleSignOut} className='p-1 bg-white  w-[5rem] border border-b-black'>
                 Setting
                </button>
                <button id="signOut" onClick={handleSignOut} className='p-1 bg-white rounded-b-md w-[5rem] border border-b-black'>
                 Sign Out
                </button>
              </form>
            )}
          </div>
    </div>
}

    </div>
  )
}

export default Header