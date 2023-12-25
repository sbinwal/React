import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
    const gptValue = useSelector(store => store.gpt)
  return (
    <div className={`text-white bg-black text-opacity-60 z-50`}>
        <div className='mx-auto container py-8 mt-0'>
        <h1 className='text-xl xl:mx-9'>Questions? Call 1-844-505-2993</h1>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 my-9 justify-items-center gap-y-8'>
              <div>
                <p>FAQ</p>
                <p className='my-3'>Investor Relations</p>
                <p>Ways to Watch</p>
                <p className='my-3'>Corporate Information</p>
                <p>Netflix Originals</p>
              </div>

              <div className=''>
                <p>Help Center</p>
                <p className='my-3'>Jobs</p>
                <p>Ways to Watch</p>
                <p className='my-3'>Terms of Use</p>
                <p>Contact Us</p>
              </div>

              <div>
                <p>Account</p>
                <p className='my-3'>Redeem Gift Cards</p>
                <p>Privacy</p>
                <p className='my-3'>Speed Test</p>
              </div>

              <div className=''>
                <p>Media Center</p>
                <p className='my-3'>Buy Gift Cards</p>
                <p>Cookie Preferences</p>
                <p className='my-3'>Legal Notices</p>
              </div>
            
        </div>
    </div>
    </div>
  )
}

export default Footer