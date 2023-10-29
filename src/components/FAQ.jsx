import React from 'react'
import data from './Data'

const FAQ = () => {
  return (
    <div  className="lg:w-[60rem] bg-white  rounded-2xl mt-4">
      <div  className="md:px-[4.95rem] md:pr-[4.56rem] md:pt-[2.19rem] md:pb-[3.62rem] p-3 md:p-4">
        <h2 className='text-3xl leading-6 mb-6 font-bold'>Frequently Asked Questions</h2>
        {
            data.map((item)=>{
                return (
                    <>
                    <h3 className='text-base font-bold my-2'>{item.title}</h3>
                    <p>{item.description}</p>
                    <hr  className='my-3'/>
                    </>
                )
            })
        }
      </div>
    </div>
  )
}

export default FAQ
