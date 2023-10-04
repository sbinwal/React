import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header />
      <div className='relative'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt='background' className='h-[50rem]' />
        <div className='bg-shadeblack absolute inset-x-1/3 top-28  w-[30rem] opacity-90 min-h-[660px] py-16'>
          <div className='mx-auto w-80'>
            <div className='text-4xl font-bold'>
              <h1 className='text-white'>Sign In</h1>
            </div>
            <div className=''>
              <form className='mt-8'>
                <div>
                  <input type="text" placeholder='Email or phone number' className='w-80 h-14 rounded-md px-5' />
                </div>
                <div className='mt-6'>
                  <input type="text" placeholder='Password' className='w-80 h-14 rounded-md px-5' />
                </div>
                <div className='mt-6'>
                  <button className='bg-red-500 w-80 h-14 text-white text-xl font-semibold rounded-md'>Sign In</button>
                </div>

                <div className='flex justify-between my-3'>
                  <div className='flex'>
                    <input type='checkbox' className='mx-1' />
                    <div className='text-[#b3b3b3]'>Remember Me</div>
                  </div>
                  <div className='text-[#b3b3b3]'>Need Help?</div>
                </div>
                <div className='my-16'>
                <div className='flex my-3'>
                  <h3 className='text-lightblack'>New to Netflix?</h3>
                  <h3 className='text-white mx-1'>Sign Up Now</h3>
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


    </div>
  )
}

export default Login