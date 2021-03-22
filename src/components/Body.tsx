import React from 'react';

const Body = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col mt-12 sm:w-screen md:w-1/7 xl:w-1/7">
                <div className="flex items-center mb-6">
                        <p className="flex-grow text-4xl font-normal tracking-widest text-white sm:text-2xl">T O D O</p>
                        <span className="flex-none cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>
                        </span> 
                </div>
                
                {/* add a todo component */}
                <div className="flex items-center p-2 mb-5 bg-gray-800 rounded">
                    
                    <input 
                        type="text" 
                        name="create" 
                        id="create" 
                        placeholder="Create a new todo..."
                        className="w-full p-2 mr-5 text-base text-white bg-gray-800 border-0 outline-none"
                        />

                    <div className="flex items-center justify-center px-6 py-2 mr-3 text-white bg-opacity-0 border border-gray-300 rounded-full cursor-pointer hover:bg-blue-900 hover:border-blue-900">
                        ADD
                    </div>
                </div>
                
                {/* list of todos */}
                <div className="flex items-center p-2 bg-gray-800 rounded">
                 ♥
                </div>

            </div>
        </div>
    )
}

export default Body;
