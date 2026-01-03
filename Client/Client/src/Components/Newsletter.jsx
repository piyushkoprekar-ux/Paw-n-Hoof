import React from 'react'

function Newsletter() {
    return (
        <>
            <section className='w-full h-[55vh] bg-[#f2ecdc] flex items-center justify-center'>
                <div className='w-[80%] h-[40vh] bg-[#ed7c2b] rounded-3xl flex  '>
                    {/* left */}
                    <div className="left w-[50%] h-full flex justify-center items-center">
                        <div className="data pl-10 text-amber-50 ">
                            <h1 className='text-3xl font-bold'>Stay Updated</h1>
                            <p className='mt-4'>Join our newsletter to receive heartwarming stories,
                                adoption updates, and event invitations.</p>
                        </div>

                    </div>

                    <div className="right w-[50%] h-full flex   items-center">
                        <div className="data ">
                            <div className='flex gap-3.5'>

                                <input
                                    type="email"
                                    placeholder="Enter Your email"
                                    className=" mt-1 px-4 py-3  bg-amber-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                                <div className='bg-amber-900 w-[140px] h-auto flex items-center justify-center rounded-2xl text-amber-50 text-'>Subscribe</div>
                            </div>
                            <div>

                                <div className='mt-3.5 text-amber-50'>We respect your privacy. Unsubscribe at any time.</div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </>
    )
}

export default Newsletter
