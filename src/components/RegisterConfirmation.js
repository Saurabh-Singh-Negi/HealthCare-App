import React from 'react'
import { useLocation } from 'react-router-dom';

const RegisterConfirmation = () => {
    const location = useLocation();
  return (
    <>
    <div className='bg-[#CAD5E2] h-screen flex flex-col items-center justify-center gap-4'>
        <h1 className='text-2xl sm:text-5xl font-bold'>Profile create successfully</h1>
        {location.state.action == "coach"? 
        <div>
            <h1 className='text-lg sm:text-2xl'>coach id is: {location.state.coachId}</h1>
        </div>:
        <div>
            <h1 className='text-lg sm:text-2xl'>User id is: {location.state.userId}</h1>
        </div>
        }
    </div>
    </>
  )
}

export default RegisterConfirmation;