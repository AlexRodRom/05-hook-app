import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../08-useReducer/TodoItem";

describe('Pruebas en <TodoItem/>',() => {

    const todo = {
        id:1,
        description: 'Piedra del Alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(()=>{
        jest.clearAllMocks();
    })

    test('debe mostrar el Todo Pendiente de completar',()=>{

        render(<TodoItem 
            todo={ todo } 
            onDeleteTodo = { onDeleteTodoMock } 
            onToggleTodo= { onToggleTodoMock } />);
        const liElement = screen.getByRole('listitem');
        const spanElement = screen.getByLabelText('span');
        screen.debug();

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
    });

    test('debe mostrar el Todo completado',()=>{

        todo.done = true;

        render(<TodoItem 
            todo={ todo } 
            onDeleteTodo = { onDeleteTodoMock } 
            onToggleTodo= { onToggleTodoMock } />);

        const spanElement = screen.getByLabelText('span');
        screen.debug();
        expect(spanElement.className).toBe('align-self-center text-decoration-line-through');
    });


    test('debe llamar el ToggleTodo cuando se hace click',()=>{

        render(<TodoItem 
            todo={ todo } 
            onDeleteTodo = { onDeleteTodoMock } 
            onToggleTodo= { onToggleTodoMock } />);
            
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement, todo.id);
        screen.debug();
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
    });

    test('El botón debe llamar el deleteTodo cuando se hace click',()=>{

        render(<TodoItem 
            todo={ todo } 
            onDeleteTodo = { onDeleteTodoMock } 
            onToggleTodo= { onToggleTodoMock } />);
            
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement, todo );
        screen.debug();
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo );
    });
});