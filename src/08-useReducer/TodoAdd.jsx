import { useState } from "react"

export const TodoAdd = ({ onNewTodo }) => {

    const [newTodo, setNewTodo] = useState({ id:0, description:'',done:false});
    
    const { description } = newTodo;

    const onInputChange = ({ target }) => {
        const { value } = target;
        
        //console.log({...newTodo});
        setNewTodo( 
            {
                ...newTodo,
                description: value 
            } 
        );
        //console.log(newTodo);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        //console.log({...newTodo});
        setNewTodo(
            {
                ...newTodo,
                id: new Date().getTime(), 
                done: false 
            }
        );
        //console.log({...newTodo});
        onNewTodo({...newTodo});
    }

    return (
        <>
            <form onSubmit={ onSubmit }>
                <input
                    type='text'
                    placeholder="Introduzca tarea..."
                    className="form-control"
                    value = { description }
                    onChange={ onInputChange }
                />
                <button 
                    type='submit' 
                    className="btn btn-outline-primary mt-2">
                        Agregar Todo
                </button>
            </form>
        </>
    )
}
