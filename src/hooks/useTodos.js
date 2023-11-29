import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );
    
    useEffect(() => {
      console.log(todos);
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action =  {
            type: "[TODO] Add Todo",
            payload: todo
        } 
        dispatch(action);
    }

    const handleDeleteTodo = ( todo ) => {
        const action =  {
            type: "[TODO] Delete Todo",
            payload: todo
        } 
        dispatch(action);
    } 

    const handleToggleTodo = ( id ) => {
        const action =  {
            type: "[TODO] Toggle Todo",
            payload: id
        } 
        dispatch(action);
    } 

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        pendingTodosCount: todos.filter((t) => !t.done).length,
        todosCount: todos.length
    }

};