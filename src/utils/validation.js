import React from 'react'

export const ApplyValidation = (name,email,password, isSignInForm) => {
  
    const nameError = isSignInForm || /^[a-zA-Z ]{2,30}$/.test(name)
  const emailError = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

  console.log("emailerror",nameError)

  const passwordError = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)

  if(!nameError)
  {
    const nameMessage = "Invalid name"
    return nameMessage

  }
  if(!emailError)
  {
    const emailMessage = "Invalid Email"
    return emailMessage

  }
  else if(!passwordError) {
    
    const passwordMessage = "Invalid Password"
    return passwordMessage
  }

  else{
    return null
  }
}
