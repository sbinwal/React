import React, { useEffect, useState } from 'react'
import { signOut, onAuthStateChanged } from "@firebase/auth";
import { auth } from '../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../constants/constants';
import { toggleButton } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


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
  }

  const handleChange = (e)=>{
          dispatch(changeLanguage(e.target.value))
  }

  const toggleSignOutDropdown = () => {
    setShowSignOutDropdown(!showSignOutDropdown);
  };
  return (
    
    <div className='z-10 absolute grid grid-cols-12 w-screen items-center shadow-black'>
        <img src={LOGO} width = {230} height={95} className={gptValue?.button ? "opacity-100 col-span-7" : "opacity-100 col-span-8"} alt='logo'/>
    
    {user &&
    <div className={gptValue?.button ? "flex justify-self-start col-span-5 items-center" : "flex justify-self-start col-span-4 items-center"}>
      <div>
        <p className='text-white mx-2'>{`Welcome, ${user?.displayName}`}</p>
      </div>
      {gptValue?.button &&
      <form>
      <select id="mySelect"  onChange={handleChange} className='p-2 rounded bg-indigo-500 text-white'>
        {SUPPORTED_LANGUAGES?.map((item,index)=>{

          return(
           <option value={item?.identifier}>{item?.name}</option>
          )
           
        })}
        
      </select>
      </form>
}


      <button className='text-white mx-5 bg-indigo-500 p-2 rounded' onClick={handleClick}>{gptValue?.button ? "Homepage" : "GPT Search"}</button>
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
              className='cursor-pointer'
            />
            {showSignOutDropdown && (
              <form className='absolute top-[2.59rem] right-[-2.5rem]'>
                <button id="signOut" onClick={handleSignOut} className='p-1 bg-indigo-500 text-white w-[5rem] border border-b-black'>
                 Profile
                </button>
                <button id="signOut" onClick={handleSignOut} className='p-1 bg-indigo-500 text-white w-[5rem] border border-b-black'>
                 Setting
                </button>
                <button id="signOut" onClick={handleSignOut} className='p-1 bg-indigo-500 text-white w-[5rem] border border-b-black'>
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