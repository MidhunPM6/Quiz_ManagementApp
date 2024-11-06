import React from 'react'


const Login = () => {
  return (
    <div className="flex place-content-center ml-12 ">
      <div className="flex flex-col place-items-center  h-[70vh]  font-poppins">
        <form
        
          action="submit"
          method="post"
          className="flex flex-col m-28 items-center"
        > 
            <label htmlFor="" className="text-2xl font-mono font-semibold">
                Account Login
            </label>
          
          
          <input
            type="email"
            placeholder="Enter your Email"
            className="py-1 px-10 mt-6 border-2 rounded-md border-gray-200 focus:outline-gray-300"
          />
          
          <input
            type="password"
            placeholder="Enter your Password"
            className="py-1 px-10 mt-6 border-2 rounded-md border-gray-200 focus:outline-gray-300"
          />
          <button type="submit" className="mt-10 text-lg px-7 py-1 bg-green-600 text-white rounded-md hover:bg-green-700"> Sign Up</button>
        </form>

      </div>
      <div >
        <button className="mt-10 text-md font-bold bg-slate-100 text-gray-700  px-6 py-1 rounded-md hover:bg-slate-200">Sign Up</button>
      </div>
      
      </div>
   
  )
}

export default Login
