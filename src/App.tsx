import loginIMG from "../public/loginIMG.jpg"
import logodaryl from "./assets/logodaryl.svg"
import firstletterlogo from "./assets/Group 48.svg"
function App() {

  return (
    <>
  <div className=" flex">
<div className=" w-1/2 h-screen flex items-center justify-center "> 
<div>
  <span className=" my-4 py-4"><img src={firstletterlogo} alt="" className=" my-4 py-4 w-24 h-48" /></span>

  <form action="" className=" space-y-6">
  <div>
      <label htmlFor="" className=" text-sm font-bold text-gray-600 block">Email</label>
      <input type="text" 
      className=" w-full p-2 border rounded border-gray-300 mt-1 focus:outline-none focus:ring focus:ring-violet-300 " name="Email" />
    </div>
    <div>
      <label htmlFor="" className=" text-sm font-bold text-gray-600 block">Password</label>
      <input type="password" className=" w-full p-2 border focus:outline-none focus:ring focus:ring-violet-300  rounded border-gray-300 mt-1" name="password"/>
    </div>
    <div className=" flex">
      <input type="checkbox" className=" h-5 w-5 text-blue-300 rounded m-x-2" />
      <label htmlFor="" className=" ml-2 text-sm text-gray-600"> I a gree to <span className=" text-blue-500 border-b-2 border-blue-500"><a href="">Privacy Policy</a></span></label>
    </div>
    <div >
      <button  className=" hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-800 font-bold py-2 px-4 border-2 border-purple-800 hover:text-white rounded-3xl w-60 m-4 text-purple-800">
        Sing Up
        </button>
      <button  
      className=" hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-800 font-bold py-2  hover:text-white px-4 border-2 border-purple-800  rounded-3xl w-60 m-4 text-purple-800">
        log In
        </button>
    </div>
  </form>

</div>
</div>


<div className="w-1/2 bg-gradient-to-b from-blue-500 to-purple-500 h-screen flex items-center justify-center">
  <div className="relative w-full h-full">
    <img src={loginIMG} alt="Image de fond" className="object-cover w-full h-full absolute inset-0 z-0 opacity-40" />
    <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-500 opacity-60"></div>
    <div className="relative z-10 text-white top-1/3 left-1/3  ">
      <p className=" text-sm tracking-[1em] leading-8">WELCOM  TO</p>
      <h1 className="text-xl font-semibold ">Cristine Dj Events</h1>
      <span className="border-b-2 px-16"></span>
      <p className="mt-4 text-lg tracking-[.25em]">Register to book tickets</p>
    </div>
    <div className=" z-10 absolute bottom-0 right-0 m-8 ">
      <img src={logodaryl} alt="" className="w-60 h-60" />
    </div>
  </div>
</div>

  </div>

    </>
  )
}

export default App
