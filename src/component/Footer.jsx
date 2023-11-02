import React from 'react'
import Instagram from "../assets/ri_instagram-fill.svg"
import Facebook from "../assets/mdi_facebook.svg"
import Twitter from "../assets/ion_logo-twitter (1).svg"
import LinkedIn from "../assets/uil_linkedin.svg"

const Footer = () => {
  return ( 
    <footer className='h-[522px] w-full '>
      <div className='h-[455px] bg-[#114050] relative'>
        <div className='w-[292.81px] h-[126px] absolute top-[102px] left-[71.94px] flex flex-col'>
          <span className='text-[46.3448px] text-white'>Logo</span>
          <span className='text-[21.7156px] text-[#ffffff9e] leading-[100%]'>Lorem ipsum dolor sit amet consectetur adipiscing</span>
        </div>
        <div className='w-[743.68px] h-[190.3px] absolute top-[109px] right-[45.50px] flex justify-between p-[11.29px]'>
          <div className='flex flex-col'>
            <span className='text-[24.51px] text-white/100'>Contact</span>
            <ul className='w-[173.58px] h-[142.73px] flex flex-col justify-between text-[24.51px] text-[#ffffff9e] mt-[11.29px]'>
              <li>Email us</li>
              <li>Company</li>
              <li>How it works</li>
            </ul>
          </div>
          <div className='flex flex-col ml-[-72.24px]'>
          <span className='text-[24.51px] text-white/100'>Support</span>
            <ul className='w-[173.58px] h-[142.73px] flex flex-col justify-between text-[24.51px] text-[#ffffff9e] mt-[11.29px]'>
              <li>FAQ's</li>
              <li>Help center</li>
              <li>Consult</li>
            </ul>
          </div>
          <div className='flex flex-col ml-[-72.24px]'>
          <span className='text-[24.51px] text-white/100'>Get in touch</span>
            <ul className='h-[89.51px] flex flex-col justify-between text-[24.51px] text-[#ffffff9e] mt-[22.58px]'>
              <li>hello@amalitech.com</li>
              <li> +2334567876</li>
            </ul>
          </div>
        </div>
        <div className='w-[249.99px] h-[35.83px] absolute top-[292.58px] left-[73.75px] flex '>
          <img src={Instagram} alt="" />
          <img src={Facebook} alt="" className='ml-[36.64px] mr-[33.27px]' />
          <img src={Twitter} alt="" />
          <img src={LinkedIn} alt="" className='ml-[33.37px]'/>
        </div>
      </div>
      <div className='h-[67px] bg-[#0c3c4cce] flex justify-center items-center text-white text-base font-normal'>
        Copyright © Amalitech 2023.All rights reserved.
      </div>
    </footer>
  )
}

export default Footer