import React from "react";
import FAQ from "./FAQ";

const TaxForm = () => {
  return (
    <>
    <div className="lg:w-[60rem] bg-white  rounded-2xl">
      <div className="md:px-[4.95rem] md:pr-[4.56rem] md:pt-[2.19rem] md:pb-[3.62rem] p-3 md:p-4">
        <div className="flex justify-center">
          <h1 className=" text-2xl md:text-[2.25rem] font-bold text-black mb-[2.5rem]  text-center leading-[2.625rem]">
            Free Crypto Tax Calculator Australia
          </h1>
        </div>

        <div className="flex gap-5 md:gap-10 ">
          <div className="flex flex-col md:flex-row lg:flex-row gap-2  place-items-center">
            <label htmlFor="" className="leading-6 font-normal">
              Financial Year
            </label>
            <select
              name=""
              id=""
              className="rounded-lg outline-none bg-[#EFF2F5] flex h-10 md:h-12 w-[10.25rem] md:w-[15.56rem] px-3 py-2 md:py-3 flex-col justify-between items-center flex-shrink-0 self-stretch placeholder:text-black font-medium text-lg"
            >
              <option value="" className="text-center font-inter font-medium">
                FY 2023-24
              </option>
            </select>
          </div>

          <div className="flex flex-col md:flex-row lg:flex-row gap-2 justify-start  place-items-center">
            <label htmlFor="" className="leading-6 font-normal ">
              Country
            </label>
            <select
              name=""
              id=""
              className="rounded-lg outline-none bg-[#EFF2F5] flex px-3 py-2 md:py-3 flex-col justify-between items-center flex-shrink-0 self-stretch w-[10.25rem] md:w-[15.56rem] h-10 md:h-12 placeholder:text-black font-medium text-lg"
            >
              <option value="" className="text-center font-medium">
                Australia
              </option>
            </select>
          </div>
        </div>

        <div className="m-7"></div>

        <hr />
        <div className="m-7"></div>

        <div className="md:flex md:gap-10">
          <div className="w-full md:w-[22rem]">
            <label className="text-sm font-normal leading-6" htmlFor="name">
              Enter purchase price of crypto
            </label>
            <input
              className="rounded-lg outline-none bg-[#EFF2F5] flex w-full h-14  bg-transparent px-3 py-2 placeholder:text-black font-medium text-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="$ 30,000"
              id="name"
            ></input>
          </div>
          

          <div className="w-full md:w-[22rem] mt-5 md:mt-0">
            <label className="text-sm font-normal leading-6" htmlFor="name">
              Enter sale price of crypto
            </label>
            <input
              className="rounded-lg outline-none bg-[#EFF2F5] flex w-full h-14  bg-transparent px-3 py-2 placeholder:text-black font-medium text-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="$ 20,000"
              id="name"
            ></input>
          </div>
        </div>

        <div className="m-5 md:7"></div>

        {/* new line */}
        <div className="md:flex md:gap-10">
          <div className="w-full md:w-[22rem]">
            <label className="text-sm font-normal leading-6" htmlFor="name">
              Enter your expenses
            </label>
            <input
              className="rounded-lg outline-none bg-[#EFF2F5] flex w-full h-14  bg-transparent px-3 py-2 placeholder:text-black font-medium text-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="$ 5,000"
              id="name"
            ></input>
          </div>

          <div className="w-full md:w-[22rem] mt-5 md:mt-0">
            <label className="text-sm font-normal leading-6" htmlFor="name">
              Investment type
            </label>
            <div className="flex">
              <div className="flex gap-4 md:gap-2">
                <div>
                <input
              className="rounded-lg outline-none bg-[#EFF2F5] flex w-full h-14  bg-transparent px-3 py-2 placeholder:text-black font-medium text-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="$ 5,000"
              id="name"
            ></input>
            <label htmlFor="" className="text-sm font-normal leading-6">&lt; 12 months</label>
                </div>
                <div>
                <input
              className="rounded-lg outline-none bg-[#EFF2F5] flex w-full h-14  bg-transparent px-3 py-2 placeholder:text-black font-medium text-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="$ 5,000"
              id="name"
            ></input>
            <label htmlFor="" className="text-sm font-normal leading-6">&gt; 12 months</label>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* new line */}
        <div className="m-5 md:7"></div>


        <div className="md:flex md:gap-10">
          <div className="w-full md:w-[22rem]">
            <label className="text-sm font-normal leading-6" htmlFor="name">
              Select your Annual Income
            </label>
            <select name="" id=""  className="rounded-lg outline-none bg-[#EFF2F5] flex w-full h-14  bg-transparent px-3 py-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-black font-medium text-lg">
              <option value="">$ 45,000</option>
              <option value="">$ 120,000</option>
            </select>
          </div>
          

          <div className="w-full md:w-[22rem] mt-5 md:mt-0">
            <div className="flex flex-row gap-3 md:gap-0 md:flex-col mt-0 md:mt-6">
              <p>Tax Rate</p>
              <p>$ 5902 + 32.5% of excess over $45,001</p>
            </div>
            
          </div>
        </div>


        {/* new line */}
        <div className="m-5 md:7"></div>


        <div className="md:flex md:gap-10">
          <div className="w-full md:w-[22rem]">
            <label className="text-sm font-normal leading-6" htmlFor="name">
              Select your Annual Income
            </label>
            <select name="" id=""  className="rounded-lg outline-none bg-[#EFF2F5] flex w-full h-14  bg-transparent px-3 py-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-black font-medium text-lg">
              <option value="">$ 45,000</option>
              <option value="">$ 120,000</option>
            </select>
          </div>
          

          <div className="w-full md:w-[22rem] mt-5 md:mt-0">
            <label className="text-sm font-normal leading-6" htmlFor="name">
              Enter sale price of crypto
            </label>
            <input
              className="rounded-lg outline-none bg-[#EFF2F5] flex w-full h-14  bg-transparent px-3 py-2 placeholder:text-black font-medium text-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="$ 20,000"
              id="name"
            ></input>
          </div>
        </div>


        {/* new line */}
        <div className="m-5 md:7"></div>


        <div className="md:flex md:gap-10">
          <div className="w-full md:w-[22rem]">
            <label className="text-sm font-normal leading-6" htmlFor="name">
              Capital gains amount
            </label>
            <input
              className="rounded-lg outline-none bg-[#EFF2F5] flex w-full h-14  bg-transparent px-3 py-2 placeholder:text-black font-medium text-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="$ 5,000"
              id="name"
            ></input>
          </div>
          

          <div className="w-full md:w-[22rem] mt-5 md:mt-0">
            <label className="text-sm font-normal leading-6" htmlFor="name">
              Discount for long term gains
            </label>
            <input
              className="rounded-lg outline-none bg-[#EFF2F5] flex w-full h-14  bg-transparent px-3 py-2 placeholder:text-black font-medium text-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="$ 2,500"
              id="name"
            ></input>
          </div>
        </div>
        {/* new line */}
        <div className="m-5 md:7"></div>


        <div className="md:flex md:gap-10">
          <div className="w-full md:w-[22rem]">
            <div className="flex flex-col justify-center items-center gap-2 bg-green-100 p-4 rounded-lg">
              <p className="text-base text-[#0F1629] font-medium">Net capital gains tax amount</p>
              <p className="text-2xl font-bold text-[#0FBA83]">$ 2,500</p>
            </div>
          </div>
          

          <div className="w-full md:w-[22rem] mt-5 md:mt-0">
           
          <div className="w-full md:w-[22rem]">
            <div className="flex flex-col justify-center items-center gap-2 bg-blue-100 p-4 rounded-lg">
              <p className="text-base text-[#0F1629] font-medium">The tax you need to pay*</p>
              <p className="text-2xl font-bold text-[#0141CF]">$ 812.5</p>
            </div>
          </div>
          </div>
        </div>
        
      </div>
    </div>

        <FAQ/>
    
    </>
  );
};

export default TaxForm;
