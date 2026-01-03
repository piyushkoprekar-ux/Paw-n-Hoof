import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import img1 from '../Images/bannerimg.png'

function Story() {
  return (
    <>
    <section className='w-full h-[70vh] bg-white flex '>
        
            {/* left */}
            <div className="left w-[45%] h-[100%]  flex flex-col pl-9 mt-10 ">
                <div>
                    <div className="top text-[#f2914b] bg-[#fcf1e8] inline-block px-3.5  rounded-2xl">Success Story</div>
                    <h1 className="text-3xl font-bold mt-7 text-[#421f16]">Max's Journey to a Forever Home</h1>
                    <p className='text-[#705750] mt-4'>"When we first saw Max, he was shy and recovering from a
difficult past. Thanks to the Paws & Hope team, he received
the medical care and training he needed. Now, he's the
happiest part of our family."
</p>
<div>
    <h2 className='font-bold mt-11'>— The Thompson Family</h2>
    <h3>Adopted Jan 2023</h3>
</div>

<div className='text-1xl text-[#ed7e2f] flex gap-2 items-center mt-6'>Read More Stories <FaLongArrowAltRight /></div>
                </div>

            </div>

            <div className="right w-[55%] h-[100%]">
              <img src={img1} alt="" />

            </div>
       

    </section>
      
    </>
  )
}

export default Story
