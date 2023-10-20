import React, { useEffect } from 'react'
import { signOut, onAuthStateChanged } from "@firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../constants/constants';


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(store => store.user)

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
  return (
    
    <div className='z-10 absolute flex justify-between w-screen px-6 items-center'>
        <img src={LOGO} width = {230} height={95} className='opacity-100' alt='logo'/>
    
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