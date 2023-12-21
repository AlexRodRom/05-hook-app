import { TodoList } from "./todoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks";

export const TodoApp = () => {

    const { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo, todosCount, pendingTodosCount } = useTodos();

    return (

        <>
            <div className="d-flex d-flex justify-content-between"><h1>TodoApp ({ todosCount }) </h1><small>Pendientes: ( { pendingTodosCount } )</small></div>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos } 
                        onDeleteTodo = { handleDeleteTodo }
                        onToggleTodo= { handleToggleTodo }>
                    </TodoList>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
                    <TodoAdd onNewTodo = { handleNewTodo }></TodoAdd>
                </div>
            </div>
        </>
    )
}
