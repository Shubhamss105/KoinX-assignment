import React from "react";
import logo from "../images/Newsletter.svg";

const SubscribeCard = () => {
  return (
    <div className="bg-white py-20 mx-4">
      <div className="  mx-4">
        <div className="w-full md:w-[70rem] h-auto md:h-72 bg-[#0052FE] rounded-2xl  mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center my-8 py-8">
            <div className="">
              <img src={logo} alt="" className=""/>
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <h1 className="text-white font-bold text-3xl text-center">
                Track your portfolio and taxes
              </h1>
              <p className="text-white font-medium text-lg text-center px-4">
                With our range of features that you can equip for free, KoinX
                allows you to be more educated and aware of your tax reports.
              </p>
              <div className="md:flex justify-center hidden">
                <input type="text" className="bg-white text-[#0052FE] font-medium outline-none text-lg px-8 py-3 rounded-lg mt-8 rounded-r-none" placeholder="Enter your email address" />
                <button className="bg-yellow-500 text-black outline-none font-medium text-lg px-8 py-3 rounded-lg mt-8 ml-0 border-spacing-0 rounded-l-none">
                  Subscribe
                </button>

              </div>

             
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default SubscribeCard;
