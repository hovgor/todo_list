import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, settodos] = useState([]);

    const addTodo = (todo) => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return 
        }
        const newtodos = [todo, ...todos]
        settodos(newtodos)
    }

    const completeTodo = id => {
        let updatedtodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        settodos(updatedtodos); 
    }
    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return ;
        } 

        settodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    } 




    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        settodos(removeArr);
    }


  return (
    <div>
        <h1>To do list</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos}
              completeTodo={completeTodo} 
              removeTodo={removeTodo}
              updateTodo={updateTodo}
              /> 
    </div>
  )
}
 
export default TodoList