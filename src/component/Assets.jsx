import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
const Assets = () => {
  const {data} = useSelector((store)=>store.asset)
  return (
    <div className='mt-[70px] ml-[10px]  w-[750px]'>
      <div className='mt-[50px] w-[750px]'>
        <h6 className='text-[25px] font-bold static text-[#101828]'>My Assets</h6>
      </div>
          
      <div className='mt-5 ml-8 w-[710px] border-b flex justify-center text-[18px] font-normal static'>
        <div className=' mr-[138px] '>Name</div>
        <div className=' mr-[138px] '>Symbol</div>
        <div className='mr-[100px]'>Quantity</div>
        <div>Purchase Price</div>
      </div>
      <div className='overflow-y-auto h-[200px] overflow-x-hidden scrollbar'>
      {
  data && data.map((item)=>{
    return(
      <Link to ={`/view-stats/${item.assetName}`} key={item.assetName}>
        <div className='mt-[20px] ml-8 w-[772px] h-[60px] flex items-center relative hover:bg-[rgba(217,217,217,0.28)] p-[20px] cursor-pointer mb-10 '>
          <div className=' '>{item.assetName}</div>
          <div className=' absolute left-[210px] 2xl:left-[210px]'>{item.symbol}</div>
          <div className='absolute left-[425px] 2xl:left-[425px] '>{item.quantity}</div>
          <div className='absolute left-[610px] 2xl:left-[610px]'>${item.purchasePrice}</div>
        </div>
      </Link>

    )
 })
}
      </div>   
    </div>
  

   

  )
}

export default Assets