import React, { useState, useEffect } from "react";
import FAQ from "./FAQ";

const TaxForm = () => {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [investmentType, setInvestmentType] = useState("Long Term");
  const [annualIncome, setAnnualIncome] = useState("$45,001 - $120,000");

  const [taxRate, setTaxRate] = useState(""); // State variables to store calculated values
  const [capitalGains, setCapitalGains] = useState(0);
  const [discountForLongTermGains, setDiscountForLongTermGains] =
    useState(2500);
  const [netCapitalGains, setNetCapitalGains] = useState(0);
  const [taxToBePaid, setTaxToBePaid] = useState(0);

  const calculateTaxRate = (income) => {
    if (income === "$0-$18,200") {
      setTaxRate(0);
    } else if (income === "$18,201-$45,000") {
      setTaxRate(0.19);
    } else if (income === "$45,001-$120,000") {
      setTaxRate(0.325);
    } else if (income === "$120,001-$180,000") {
      setTaxRate(0.37);
    } else {
      setTaxRate(0.45);
    }
  };

  const calculateCapitalGains = () => {
    setCapitalGains(salePrice - purchasePrice - expenses);
  };

  const calculateDiscountForLongTermGains = () => {
    if (investmentType === "Long Term" && capitalGains > 0) {
      setDiscountForLongTermGains(capitalGains * 0.5);
    } else {
      setDiscountForLongTermGains(0);
    }
  };

  const calculateNetCapitalGains = () => {
    if (investmentType === "Long Term") {
      const discount = capitalGains * 0.5;
      setDiscountForLongTermGains(discount);
      setNetCapitalGains(capitalGains - discount);
    } else {
      setDiscountForLongTermGains(0);
      setNetCapitalGains(capitalGains);
    }
  };
  

  const calculateTaxToBePaid = () => {
    calculateTaxRate(annualIncome);
  
    // Calculate the tax amount
    let excessIncome = 0;
    if (annualIncome === "$0-$18,200") {
      excessIncome = 0;
    } else if (annualIncome === "$18,201-$45,000") {
      excessIncome = netCapitalGains * 0.19;
    } else if (annualIncome === "$45,001-$120,000") {
      excessIncome =  netCapitalGains * 0.325;
    }
    else if (annualIncome === "$120,001-$180,000") {
      excessIncome =  netCapitalGains * 0.37;
    }
    else if (annualIncome === "$180,000+") {
      excessIncome =  netCapitalGains * 0.45;
    }
  
    let calculatedTax = 0;
    if (excessIncome > 0) {
      calculatedTax = excessIncome;
      // calculatedTax = (excessIncome * (taxRate / 100)).toFixed(2);
    }
  
    setTaxToBePaid(calculatedTax);
  };
  
  
  

  useEffect(() => {
    calculateCapitalGains();
    calculateDiscountForLongTermGains();
    calculateNetCapitalGains();
    calculateTaxToBePaid();
  }, [purchasePrice, salePrice, expenses, investmentType, annualIncome]);

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
              <label
                htmlFor=""
                className="leading-6 font-normal ml-[-6rem] md:ml-0"
              >
                Financial Year
              </label>
              <select
                name=""
                id=""
                className="rounded-lg outline-none bg-[#EFF2F5] flex h-10 md:h-12 w-[11rem] md:w-[15.56rem] px-3 py-2 md:py-3 flex-col justify-between items-center flex-shrink-0 self-stretch placeholder:text-black font-medium text-lg"
              >
                <option value="" className="text-center font-inter font-medium">
                  FY 2023-24
                </option>
              </select>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-row gap-2 justify-start  place-items-center">
              <label
                htmlFor=""
                className="leading-6 font-normal ml-[-9rem] md:ml-0"
              >
                Country
              </label>
              <select
                name=""
                id=""
                className="rounded-lg outline-none bg-[#EFF2F5] flex px-3 py-2 md:py-3 flex-col justify-between items-center flex-shrink-0 self-stretch  md:w-[18rem] h-10 w-[10rem] md:h-12 placeholder:text-black font-medium text-lg"
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
                className="rounded-lg outline-none bg-[#EFF2F5] flex w-full h-14  px-3 py-2 placeholder:text-black font-medium text-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                
                id="purchasePrice"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(e.target.value)}
              ></input>
            </div>

            <div className="w-full md:w-[22rem] mt-5 md:mt-0">
              <label className="text-sm font-normal leading-6" htmlFor="name">
                Enter sale price of crypto
              </label>
              <input
                className="rounded-lg outline-none bg-[#EFF2F5] flex w-full h-14 px-3 py-2 placeholder:text-black font-medium text-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                
                id="salePrice"
                value={salePrice}
                onChange={(e) => setSalePrice(e.target.value)}
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
                className="rounded-lg outline-none bg-[#EFF2F5] flex w-full h-14   px-3 py-2 placeholder:text-black font-medium text-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                
                id="expenses"
                value={expenses}
                onChange={(e) => setExpenses(e.target.value)}
              ></input>
            </div>

            <div className="w-full md:w-[22rem] mt-5 md:mt-0">
              <label className="text-sm font-normal leading-6" htmlFor="name">
                Investment type
              </label>
              <div className="flex">
                <div className="flex gap-4 md:gap-2">
                  <div>
                    <button
                      className="rounded-lg bg-transparent outline-none outline-gray-500 flex w-full mr-3 md:w-[10.3rem] h-14 px-3 py-2 text-gray-700 font-medium text-lg focus:outline-blue-600 focus:text-gray-400"
                      value="Short Term"
                      onClick={() => setInvestmentType("Short Term")}
                    >
                      Short Term
                    </button>
                    <label htmlFor="" className="text-sm font-normal leading-6">
                      &lt; 12 months
                    </label>
                  </div>
                  <div>
                    <button
                      className="rounded-lg outline-gray-500 bg-transparent flex h-14 outline-none w-full mr-5 md:w-[10.3rem]  px-3 py-2 text-gray-700 font-medium text-lg focus:outline-blue-600 focus:text-gray-400"
                      value="Long Term"
                      onClick={() => setInvestmentType("Long Term")}
                    >
                      Long Term
                    </button>
                    <label htmlFor="" className="text-sm font-normal leading-6">
                      &gt; 12 months
                    </label>
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
              <select
                name="annualIncome"
                id="annualIncome"
                className="rounded-lg outline-none bg-[#EFF2F5] flex w-full h-14   px-3 py-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-black font-medium text-lg"
                value={annualIncome}
                onChange={(e) => setAnnualIncome(e.target.value)}
              >
                <option value="$0-$18,200">$0-$18,200</option>
                <option value="$18,201-$45,000">$18,201-$45,000</option>
                <option value="$45,001-$120,000">$45,001-$120,000</option>
                <option value="$120,001-$180,000">$120,001-$180,000</option>
                <option value="$180,000+">$ 180,000+</option>
              </select>
            </div>

            <div className="w-full md:w-[22rem] mt-5 md:mt-0">
              <div className="flex flex-row gap-3 md:gap-0 md:flex-col mt-0 md:mt-6">
                <p>Tax Rate</p>
                {
                taxRate===0?<p>0%</p>:''
                }
                {
                taxRate===0.19?<p>Nil+ {(taxRate * 100)}% of excess over $18,200</p>:''
                }
                {
                taxRate===0.325?<p>$5,092+ {(taxRate * 100)}% of excess over $18,200</p>:''
                }
                {
                taxRate===0.37?<p>$29,467+ {(taxRate * 100)}% of excess over $18,200</p>:''
                }
                {
                taxRate===0.45?<p>$51,667+ {(taxRate * 100)}% of excess over $18,200</p>:''
                }
              </div>
            </div>
          </div>

          {/* new line */}
          <div className="m-5 md:7"></div>
          {investmentType === "Long Term" && (
          <div className="md:flex md:gap-10">
            <div className="w-full md:w-[22rem]">
              <label className="text-sm font-normal leading-6" htmlFor="name">
                Capital gains amount
              </label>
              <input
                className="rounded-lg outline-none bg-[#EFF2F5] flex w-full h-14   px-3 py-2 placeholder:text-black font-medium text-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                placeholder={`$ ${capitalGains}`}
                id="capitalGains"
                value={capitalGains}
                onChange={(e) => setCapitalGains(e.target.value)}
              ></input>
            </div>

            <div className="w-full md:w-[22rem] mt-5 md:mt-0">
              <label className="text-sm font-normal leading-6" htmlFor="name">
                Discount for long term gains
              </label>
              <input
                className="rounded-lg outline-none bg-[#EFF2F5] flex w-full h-14   px-3 py-2 placeholder:text-black font-medium text-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder={`$ ${discountForLongTermGains}`}
                id="discountForLongTermGains"
                value={discountForLongTermGains}
                onChange={(e) => setDiscountForLongTermGains(e.target.value)}
              ></input>
            </div>
          </div>
          )}
          {/* new line */}
          <div className="m-5 md:7"></div>

          <div className="md:flex md:gap-10">
            <div className="w-full md:w-[22rem]">
              <div className="flex flex-col justify-center items-center gap-2 bg-green-100 p-4 rounded-lg">
                <p className="text-base text-[#0F1629] font-medium">
                  Net capital gains tax amount
                </p>
                <p className="text-2xl font-bold text-[#0FBA83]">
                  $ {netCapitalGains}
                </p>
              </div>
            </div>

            <div className="w-full md:w-[22rem] mt-5 md:mt-0">
              <div className="w-full md:w-[22rem]">
                <div className="flex flex-col justify-center items-center gap-2 bg-blue-100 p-4 rounded-lg">
                  <p className="text-base text-[#0F1629] font-medium">
                    The tax you need to pay*
                  </p>
                  <p className="text-2xl font-bold text-[#0141CF]">
                    $ {taxToBePaid}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAQ />
    </>
  );
};

export default TaxForm;
