 import React from "react";
 import Head from "./components/Head";
 import Header from "./components/Header";
 import BlobTwo from "./components/BlobTwo";
 import BlobOne from "./components/BlobOne";
 import Messages from "./components/Messages";

 const Signup = ({ messages }) => (
   <>
    <Head />
     <div className="mt-10"></div>
     <Header />
     <div className="mb-10"></div>

     <div className="absolute w-[60em] z-[-10] top-[-400px] right-[-300px]">
       <BlobTwo />
     </div>
     <div className="absolute w-[60em] z-[-10] bottom-[-400px] left-[-200px]">
       <BlobOne />
     </div>

     <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-4/5 lg:py-0 mb-10">
       <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
         <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
           <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
             Sign Up
           </h1>
           <section className="col-6 mt-5">
             <Messages messages={messages} />
             <form action="/signup" method="POST">
              <div className="mb-3">
                 <label
                   for="userName"
                   className="block mb-2 text-sm font-medium text-gray-900"
                 >
                   User Name
                 </label>
                 <input
                   type="text"
                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-lime-200 focus:border-lime-200 block w-full p-2.5"
                   id="userName"
                   name="userName"
                 ></input>
               </div>
               <div className="mb-3">
                 <label
                   for="exampleInputEmail1"
                   className="block mb-2 text-sm font-medium text-gray-900"
                 >
                   Email address
                 </label>
                 <input
                   type="email"
                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-lime-200 focus:border-lime-200 block w-full p-2.5"
                  id="exampleInputEmail1"
                   aria-describedby="emailHelp"
                   name="email"
                 ></input>
                 <div id="emailHelp" className="form-text">
                   We'll never share your email with anyone else.
                 </div>
              </div>
               <div className="mb-3">
                 <label
                   for="password"
                   className="block mb-2 text-sm font-medium text-gray-900"
                 >
                   Password
                 </label>
                 <input
                   type="password"
                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-lime-200 focus:border-lime-200 block w-full p-2.5"
                   id="password"
                   name="password"
                 ></input>
               </div>
               <div className="mb-3">
                 <label
                   for="confirmPassword"
                   className="block mb-2 text-sm font-medium text-gray-900"
                 >
                   Confirm Password
                 </label>
                 <input
                   type="password"
                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-lime-200 focus:border-lime-200 block w-full p-2.5"
                   id="confirmPassword"
                   name="confirmPassword"
                 ></input>
               </div>
               <button
                 type="submit"
                 className="w-full text-lime-700 bg-lime-200 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
               >
                 Submit
               </button>
               <p className="text-sm font-light text-gray-500 pt-3">
                 Already have an account?{" "}
                 <a
                   href="/login"
                   className="font-medium text-green-600 hover:underline"
                 >
                   Login
                 </a>
               </p>
             </form>
           </section>
         </div>
       </div>
     </div>
   </>
 );
 export default Signup;