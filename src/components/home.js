import React from 'react';
import TodoForm from './todo-form/todo-form';
import TodoList from './todo-list/todo-list';
const Home =()=>{
    return(
       <div>
        <TodoForm/>
        <TodoList/>
       </div> 

        
    )
}

export default Home;