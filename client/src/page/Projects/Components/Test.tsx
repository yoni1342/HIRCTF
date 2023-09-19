import React from 'react'
function Courses({img, title, cretor, name, price, desc,}) {
  return (
    <div className = 'flex w-full h-[10rem] bg-white pr-5 mx-2 hover:shadow-xl md:flex-col md:h-[27rem] lg:h-[37rem] md:p-0 overflow-hidden transition-all duration-200 ease-in-out group '>
        <img src={img} alt="" className = 'object-cover w-[52%] md:w-fit md:group-hover:translate-y-[-10%] transition-all duration-500   ease-in-out'/>
        <div className = 'relative h-full '>
          <div className ='absolute bg-white md:group-hover:top-[-150%] lg:group-hover:top-[-90%] lg:top-[30%] transition-all duration-500   ease-in-out'>
            <h3 className = 'text-2xl font-semibold p-4'>{title}</h3>  
            <div className ='flex justify-between transition-all duration-200 ease-in-out'>
              <div className =' items-center space-x-6 hidden md:inline-flex  transition-all duration-200 ease-in-out '>
                <img src={cretor} alt="" className ='w-10 h-10 rounded-full hidden md:inline-block'/>  
                <p className='uppercase hidden md:inline-block'>{name}</p>
              </div>
              <p className = 'px-4 pb-2  text-2xl text-gray-700 font-light'>{price}</p>
            </div>
            <p className = 'px-4 font-light text-sm pb-3 md:pt-10'>{desc}</p>
            <div className = 'flex items-center space-x-9 p-4 cursor-pointer'>
              <button className ='bg-[#1A27C9] text-white px-5 py-3 uppercase hover:bg-[#14349c] hidden md:inline-block'>buy now</button>
            <p className = 'text-sm'>Learn More</p>
            <img src="https://assets-global.website-files.com/5d816b07d269385f68dbcab0/5d816b07d26938636adbcaf8_icon-arrow-small-black.svg" alt="" className = 'w-5'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Courses