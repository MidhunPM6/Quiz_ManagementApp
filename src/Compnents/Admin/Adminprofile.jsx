import React from "react";

const adminprofile = () => {
  return (
    <div className="flex flex-col place-items-center mt-10 font-poppins">
      <div>
        <h1 className="text-2xl font-semibold">List of Quiz</h1>
      </div>
      <div className=" flex justify-between items-center w-[80vw] h-50 border border-gray-300 m-7 p-10">
        <div>
          <p>1. Which of the following is not a valid C variable name?</p>
          <h1 className="mt-3">A. int number</h1>
          <h1>B. float rate</h1>
          <h1>C. int variable_count</h1>
          <h1>D. int $main</h1>
          <h1 className="mt-3">
            Answer : <span className="text-green-600">int $main</span>
          </h1>
        </div>
        <div className="flex  text-white">
          <button className="mr-3 bg-green-600 px-5 py-1 rounded-md shadow-md flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            Update
          </button>
          <button className=" bg-red-600 px-5 py-1 rounded-md shadow-md  flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
            Delete
          </button>
        </div>

      </div>
      <div>
       <button className="border-2  border-gray-400 rounded-full py-2 px-10  hover:border-gray-950">Add More Quiz</button>
      </div>
    </div>
  );
};

export default adminprofile;
