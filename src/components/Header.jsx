import React from 'react'
import { signOut } from "@firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {

  const navigate = useNavigate();

  const user = useSelector(store => store.user)

  console.log("user1",user)

  const handleSignOut = () =>{
     
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    
    <div className='z-10 absolute flex justify-between w-screen px-6 items-center'>
        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" width = {230} height={95} className='opacity-100' alt='logo'/>
    
    {user &&
    <div className='flex items-center'>
      <div>
        <p>{user?.displayName}</p>
      </div>
      <div>
      <img src= {user?.photoURL} width={40} height={40}  alt = "profile"/>
      </div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
}

    </div>
  )
}

export default Header