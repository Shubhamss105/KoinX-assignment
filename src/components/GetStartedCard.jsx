import React from "react";
import myLogo from '../images/CardSVG.svg'

const GetStartedCard = () => {
  return (
    <>
      <div className="mx-6 relative">
        <div className="flex justify-center items-center flex-col gap-[2.1875rem] w-[26.625rem] h-[36rem] bg-[#0052FE] rounded-lg py-[3.4375rem] px-10">
            <h4 className="text-white text-center leading-10 text-3xl font-bold">Get Started with KoinX for Free</h4>
            <p className="text-[#F2F2F2] text-center">With our range of features that you can equip for free, Koin allows you to be more educated and aware of your tax reports</p>
            <img src={myLogo} alt="" className="w-44 h-40 text-center"/>
            <button className="bg-white rounded-lg px-6 py-2 font-bold">Get Started for FREE</button>
        </div>
      </div>
    </>
  );
};

export default GetStartedCard;
