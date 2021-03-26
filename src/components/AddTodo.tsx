import React, { FC, useState } from 'react';
import { todoItem } from '../App';
import { useMutation } from 'react-query';

export type newTodo = {
    text: string,
    status: string
}

type props = {
    appendAdded: React.Dispatch<React.SetStateAction<todoItem[]>>
}

const addTodo = async (body: newTodo):Promise<any> => await(await fetch('/api/todos', {
    method: "POST",
    body: JSON.stringify(body)
}))

const AddTodo:FC<props> = ({ appendAdded }) => {
    const [text, setText] = useState<string>('');
    
    const handleInput = (e: React.ChangeEvent) => {
        e.preventDefault();
        const value = (e.target as HTMLInputElement).value;
        setText(value)
    }

    const { mutate } = useMutation(addTodo, {
        onSuccess: async (result) => {
            const { todo } = await result.json();
            appendAdded((prev: todoItem[]) => {
                return [...prev, todo]
            })
        }
    });

    const handleSubmit = (value: string) => {
        const body = {
            text: value,
            status: 'active'
        }
        mutate(body);
        setText("");
    }
    
    return(
        <div className="flex items-center p-2 mb-5 bg-white rounded">   
            <input 
                type="text" 
                name="create"
                value={text}
                onChange={(e) => handleInput(e)} 
                placeholder="Create a new todo..."
                className="w-full p-2 mr-5 text-base text-gray-400 bg-white border-0 outline-none"
                />

            <div className="flex items-center justify-center px-6 py-2 mr-3 text-white bg-blue-900 border border-gray-300 rounded-full cursor-pointer hover:bg-blue-900 hover:border-blue-900"
                onClick={() => handleSubmit(text)}>
                ADD
            </div>
        </div>
    )
}

export default AddTodo;
