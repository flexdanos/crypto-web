import React from 'react'

const viewStatInfo = ({name}) => {
  return (
    <div className="pl-[47px]  pt-[48px] pb-[50px]  flex  shadow  ">
        <div className="ml-10">
        <h1 className='text-[25px] mb-[23px] f'>About {name}</h1>
        <p className='w-[758px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
    </div>
  )
}

export default viewStatInfo