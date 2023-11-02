import React, { useState } from 'react'
import Up from "../assets/up.png"
import Down from "../assets/Down.png"
import Cryptomodal from './Cryptomodal'
import AddWatchlist from '../component/AddWatchlist'


function Cryptolist({ allData, setAllData }) {
  const [showWatchlist, setShowWatchlist] = useState(false)
  const [selectedItem, setSelecteditem] = useState({})
  const [addCrypto, setAddCrypto] = useState(false)

  const handleSetWatchList = (item) => {
    const {uuid,price,name,iconUrl,change} = item
    setSelecteditem({
      uuid,
      iconUrl,
      change,
      name,
      price: Number(item.price).toFixed(2)
    })
    setShowWatchlist(true)
  }

  const handleSearchCrypto = (state,item) =>{
    setSelecteditem(item)
    setAddCrypto(state)
  } 

  const closeWatchlist = () => setShowWatchlist(false)
  const closeCrypto = () => setAddCrypto(false)


  return (
    <div>
      {allData && allData.map((item, index)=>{
        return(
          <div key={index} className='pl-[24.8px] flex items-center mt-5 relative h-10 cursor-pointer'>
            <div onClick={() => handleSearchCrypto(true,item)} >
              <div  className='w-[250px] flex flex-wrap'>
                <span className='font-normal text-[18.8799px] text-[#101828] flex gap-[15.34px]'>
                  <img src={item.iconUrl} alt="" className='w-[27.14px] h-[27.14px]'/>
                  {item.name}
                </span>
              </div>
              <div>
                <span className='absolute left-[240px] top-2 2xl:left-[295px] font-normal text-[18.8799px] text-[#101828]'>
                  {item.symbol}
                </span>
              </div>
              <div>
                <span className='absolute left-[405px] top-2 2xl:left-[520px] font-normal text-[18.8799px] text-[#101828]'>
                  ${Number(item.price).toFixed(2)}
                </span>
              </div>
              <div>
                <img src={item.change > 0 ? Up : Down} alt="" className='absolute left-[640px] top-3 2xl:left-[790px]'/>
                <span className={`absolute left-[665px] top-2 2xl:left-[820px] font-normal text-[18.8799px] text-[#32D583] flex gap-[12.98px] 
                ${item.change > 0 ? 'text-[#32D583]' : 'text-red-600'}`}>
                  {item.change}%
                </span>
              </div>
              <div>
                <span className='absolute right-[275px] top-2 2xl:right-[325px] font-normal text-[18.8799px] text-[#101828]'>
                  {item.listedAt}
                </span>
              </div>
            </div>
            <div>
              <span className='absolute right-[25px] top-2 2xl:right-[25px] font-normal text-[18.8799px] text-[#101828] flex'>
                ${item.marketCap.slice(0,7)}M <span onClick={() => handleSetWatchList(item)} className='pl-2'>+</span>
              </span>
            {((showWatchlist) && (selectedItem.uuid === item.uuid)) && <AddWatchlist visible={showWatchlist} onClose={closeWatchlist} item={selectedItem}/>}
            </div>
          </div>
        )
      }) }
      <Cryptomodal visible={addCrypto} onClose={closeCrypto} singleItem={selectedItem} />
    </div>
  )
}

export default Cryptolist