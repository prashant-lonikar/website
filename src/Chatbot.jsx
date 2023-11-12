import React from 'react'

const Chatbot = () => {
  return (
    <div className='flex flex-col bg-white'>
      <p>Outermost cell</p>
        <div className='flex flex-col justify-center bg-gray-100 w-full my-2 p-2 border-4 rounded border-red-500 h-screen min-h-full overflow-auto'>
          <p>Chatbot section</p>
            <div className='flex flex-col my-auto mx-auto font-bold text-3xl border-2 rounded border-pink-500 text-center w-full mb-4 overflow-auto'>
                Heading here
            </div>
            <div className='font-bold text-3xl border-4 bg-green-500 border-blue-500 rounded flex flex-col flex-1 p-2 overflow-auto'>
              <p>Chat IO section</p>
              <div className='border-4 border-blue-500 rounded h-4/5 flex-grow-0 flex-shrink-0 min-h-[16rem] overflow-auto'>
                  <p>Chat output section</p>
              </div>
              <div className='flex-col sm:flex-row flex-grow flex-shrink min-h-[3rem] overflow-auto'>
                <input className='p-1 w-auto flex-grow rounded-md text-black ' type="text" placeholder='Enter message'/>
                <button className='flex-grow bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Notify Me</button>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Chatbot