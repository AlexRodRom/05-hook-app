
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {

  const { id, description, done } = todo;

  return (
    <>
        <li className="list-group-item d-flex justify-content-between">
           
              <span 
                aria-label="span"
                //className={`align-self-center ${ done && 'text-decoration-line-through' }`}
                className={`align-self-center ${ done ? 'text-decoration-line-through' : '' }`}
                onClick={ () => { onToggleTodo(id) } }>
                  { description }
                {/* {
                    done ? (
                      <s>
                        { description }
                      </s>
                    )
                    :(
                       description
                    )
                } */}
              </span>
            
            <button
                className="btn btn-danger"
                onClick={ () => { onDeleteTodo(todo) } }>
                borrar
            </button>
        </li>
    </>
  )
}
