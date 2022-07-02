import React, { useState } from 'react';

const NewTodo = () => {
    const [toggle, setToggle] = useState(true);


    const handleSubmit = (even) => {
        even.preventDefault();
        const ratting = {
            name: even.target.todo.value,
        }
        console.log(ratting)
        fetch('https://gentle-scrubland-01299.herokuapp.com/newTodo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ratting)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {

                }
                else {

                }

            })
       }
    

    return (
        <div class="my-4">
            <h1 className='text-4xl flex justify-center text-slate-900 font-bold mb-4 font-mono'>Task Management Tool</h1>
            <div className="w-full lg:w-96">
                <div class="card shadow-2xl">
                    <div class="p-3">
                        <form onSubmit={handleSubmit} className=''>
                            <input placeholder='Discribe Your Notes' name='todo' type="text" className="input input-bordered w-full mb-9" />
                            <>
                                <input type="submit" value='Done' name='btn1' className="btn p-2 rounded-10xl font-bold bg-rose-900 w-20" />
                            </>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewTodo;