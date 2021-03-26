import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';

import { todoItem } from '../App';

type props = {
    items: todoItem[],
    appendAdded: React.Dispatch<React.SetStateAction<todoItem[]>>
}

const updateTodo = async (id: string) => await(await(fetch(`/api/todos/${id}`, {
    method: "PUT"
})))


const TodosList: React.FC<props> = ({ items, appendAdded }) => {
    const [active, setActive] = useState('All');
    const [displayItems, setDisplayItems] = useState(items);
    
    useEffect(() => { setDisplayItems(items)}, [items])
    
    const activeItems = items.filter((item) => item.status === 'active');
    const completedItems = items.filter(item => item.status === 'completed');
    
    const handleDisplay = (status: string, data: todoItem[]) => {
        setActive(status);
        setDisplayItems(data);
    }
    
    const { mutate } = useMutation(updateTodo, {
        onSuccess: async (result) => {
            const todo  = await result.json();
            const updateItem = items.find((item) => item.id === todo.id);
            updateItem!.status = todo.status;
        }
    })

    const handleUpdateTodo = (e: React.MouseEvent, value: string) => {
        e.preventDefault();
        mutate(value)
    }

    return (
        <>
            <div className="overflow-auto text-gray-400 bg-white divide-y divide-gray-200 rounded-t-lg max-h-72 no-scrollbar">
                {
                    displayItems?.map((item) => {
                        return (
                            <div className='flex p-3' key={item.id}>
                                <span className={`flex-none w-5 h-5 px-1 py-1 mr-4 border rounded-full cursor-pointer ${item.status === 'completed' ? 'check-color': ''}`} onClick={(e) => handleUpdateTodo(e, item.id!)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#fff" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
                                </span>
                                <p className={`flex-grow ${item.status === 'completed' ? 'line-through': null}`}>{item.text}</p>
                                <span className="flex-none cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
                                </span>
                            </div>
                        )
                    })
                }
            </div>

            <div className="flex justify-between p-4 text-gray-400 bg-white border-t-2 rounded-b-lg">
                    <p>{activeItems.length} items left</p>
                    <div className="hidden md:block lg:block">
                        <div className="flex justify-center space-x-4">
                            <p className={`cursor-pointer ${active === 'All' ? 'text-indigo-600': null}`} onClick={() => handleDisplay('All', items)}>All</p>
                            <p className={`cursor-pointer ${active === 'Active' ? 'text-indigo-600': null}`} onClick={() => handleDisplay('Active', activeItems)}>Active</p>
                            <p className={`cursor-pointer ${active === 'Completed' ? 'text-indigo-600': null}`} onClick={() => handleDisplay('Completed', completedItems)}>Completed</p>
                        </div>
                    </div>
                    <p className="cursor-pointer">Clear Completed</p>
                </div>
                
                <div className="md:hidden lg:hidden">
                    <div className="flex justify-center p-4 mt-5 space-x-4 text-gray-400 bg-white rounded">
                        <p className={`cursor-pointer ${active === 'All' ? 'text-indigo-600': null}`} onClick={() => handleDisplay('All', items)}>All</p>
                        <p className={`cursor-pointer ${active === 'Active' ? 'text-indigo-600': null}`} onClick={() => handleDisplay('Active', activeItems)}>Active</p>
                        <p className={`cursor-pointer ${active === 'Completed' ? 'text-indigo-600': null}`} onClick={() => handleDisplay('Completed', completedItems)}>Completed</p>
                    </div>  
                </div>
        </>
    )

}

export default TodosList;
