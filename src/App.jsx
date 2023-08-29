import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
<div className="flex  justify-between items-center p-4">
  <div className='logo flex justify-center'>
         <img src="/src/assets/logo.png" alt="" /> 
         <h1 className='mt-1 mx-2 font-medium text-gray-500 text-xl '>Meet</h1>
  </div>
 
 <div className='flex space-x-6'>
 <div className="date">
    10:16 . Tue,29 Aug
  </div>
  <div class="group text-center">
  <img src="/src/assets/help.svg" alt="" />  
    <p class="hidden absolute  group-hover:block text-blue-500">  Help</p>  
  </div>
  <div class="group text-center mx-2">
  <img src="/src/assets/feedback.svg" alt="" />
    <p class="hidden absolute  group-hover:block text-blue-500">FeedBack</p>  
  </div>
  <div class="group text-center mr-10">
  <img src="/src/assets/setting.svg " alt="" />
    <p class="hidden absolute  group-hover:block text-blue-500">Setting</p>  
  </div>
  <div class="group text-center">
  <img src="/src/assets/menu.svg" alt="" />
    <p class="hidden absolute  group-hover:block text-blue-500">menu</p>  
  </div>
  <div class="group">
  <img src="/src/assets/profile.svg" alt="" />
    <p class="hidden absolute  group-hover:block  text-blue-500">profile</p>  
  </div>
 </div>
</div>
<div className= "flex justify-around flex-col md:flex-row md:mt-20 md:p-11 ">
  <div className='md:basis-1/2 flex justify-center md:justify-start items-center'>
    <div className='w-3/5 md:ml-10 '>
  <h1 className='font-medium text-4xl text-center md:text-start my-6 '>Premium video meetings. Now free for everyone.</h1>
   <p className='text-center text-xl md:text-start text-gray-400 my-6 '>We r  e-engineered the service that we built for secure business meetings, Google Meet, to make it free and available for all.</p>
   <button className='px-6 rounded-md text-white  bg-blue-500 py-2 md:my-6 font-medium'>
    <img className='inline-block mx-1' src="/src/assets/meet.svg" alt="" /> New meetings</button>
   <input className='p-3 mx-4' type="text"placeholder='Enter a code or link'/>
   <hr className='my-3' />
   {/* <p className='hidden'><span className='text-blue-600 cursor-pointer '>Learn More</span>  About Google Meet</p> */}
    </div>
  </div>
  <div className=' md:basis-1/2 flex justify-center items-center flex-col'>
    <img className='h-72 w-72  rounded-full border border-black  ' src="/src/assets/bg.png" alt="" />
    <h1 className='text-2xl font-medium mt-3'>Your meeting is safe</h1>
    <p className='w-80   text-center'>No one can join a meeting unless invited or admitted by the host</p>
    <span className='text-4xl text-blue-500'>. . .</span>
  </div>
</div>
<div className='text-center'>
<p><span className='text-blue-600 cursor-pointer'>Learn More</span>  About Google Meet</p>
</div>


  </>
  )
}

export default App
