import React from 'react'
import NewTodo from '../Todo/NewTodo'
import TodoDetails from '../Todo/TodoDetails'
import Todos from '../Todo/Todos'
import Footer from './Footer'
import Hero from './Hero'
import './Home.css'

const Home = () => {
    return (
       <div className=' bg-lime-200'>
         <div className='container   '>
            {/* <Hero></Hero> */}
            <NewTodo></NewTodo>
            <TodoDetails></TodoDetails>
            <Todos></Todos>
        </div>
       </div>
    )
}

export default Home