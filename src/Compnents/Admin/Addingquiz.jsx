import React from "react";

const Adding_quiz = () => {
  return (
    <>
      <div className="flex  h-[89.8vh] font-poppins place-content-center pt-16 bg-slate-50">
        <form action="" className="flex flex-col">
          <div className="flex place-content-center text-2xl">
          <h1 className="">Enter Quiz Question </h1>
          </div>
          <textarea
            id="message"
            rows="4"
            class=" p-2.5 w-[70vw] text-sm text-gray-900 rounded-lg border border-gray-300 focus:outline-none mt-4"
            placeholder="Write a question"
          ></textarea>
          
          
          <div className="flex items-center mt-10 ">
            <label htmlFor="" >Option 1 : </label>
            <input type="text" placeholder="" className="ml-4 py-1 focus:outline-none rounded-md border border-gray-300 "/>
          </div>
          <div className="flex items-center mt-6 ">
            <label htmlFor="" >Option 2 :</label>
            <input type="text" placeholder="" className="ml-3 py-1 focus:outline-none rounded-md border border-gray-300"/>
          </div>
          <div className="flex items-center mt-6 ">
            <label htmlFor="" >Option 3 :</label>
            <input type="text" placeholder="" className="ml-3 py-1 focus:outline-none rounded-md border border-gray-300"/>
          </div>
          <div className="flex items-center mt-6 ">
            <label htmlFor="" >Option 4 :</label>
            <input type="text" placeholder="" className="ml-3 py-1 focus:outline-none rounded-md border border-gray-300"/>
          </div>
          <div className="flex flex-col mt-5 ">
            <h1>Enter Correct Answer</h1>
            <input type="text" name="" id="" placeholder=" Enter Answer " className=" w-48 mt-2 py-1 rounded-md focus:outline-none border border-gray-300" />
            
          </div>
          <div className="flex place-content-center pt-10">
          <button className="bg-green-600 py-2 w-24 rounded-md  text-white hover:bg-green-700">Post Quiz</button>
          </div>
            
        
        </form>
      </div>
    </>
  );
};

export default Adding_quiz;
