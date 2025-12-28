import React from 'react'
import { FaHandHoldingHeart } from "react-icons/fa"
// import Subsec from './Subsec'

function Herosec() {
    return (
        <>
            <section className=" bg-[#f3ecdc] w-full mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <span className="flex items-center gap-2 bg-[#f2e1c9] w-[220px] text-[#ed7c2b] px-3 py-1 rounded-full text-sm font-bold mb-4">
                       <FaHandHoldingHeart className='text-[#ed7c2b]' /> Non-Profit Organization
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black leading-tight text-[#421f16] ">
                        Find a Friend,<br />
                        <span className="text-[#ed7c2b]">Save a Life.</span>
                    </h2>
                    <p className="mt-4 text-lg opacity-80 text-[#66483e]">
                        We connect loving families with pets in need of a forever home. Your support makes their second chance possible.
                    </p>

                    <div className="flex gap-4 mt-6">
                        <button className="bg-[#ed7c2b] text-white px-6 py-3 rounded-lg font-bold">
                            Meet Our Pets
                        </button>
                        <button className="border-none bg-[white] px-6 py-3 rounded-lg font-bold">
                            Make a Donation
                        </button>
                    </div>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWRvcHRpbmclMjBwZXRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="Adoptable Pets" className="w-full h-auto rounded-lg shadow-lg" />
                </div>

                
            </section>
            {/* <Subsec /> */}

        </>
    )
}

export default Herosec
