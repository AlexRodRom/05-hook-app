import { TodoApp } from "../../08-useReducer/TodoApp";
import { useTodos } from "../../hooks/useTodos";
import { render, screen } from "@testing-library/react";

jest.mock('../..//hooks/useTodos');

describe('Pruebas en <TodoApp/>',() => {

    useTodos.mockReturnValue({
      todos: [
            { id:1, description: 'TODO 1', done: false },
            { id:2, description: 'TODO 2', done: false },
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        handleNewTodo: jest.fn()
    });

    beforeEach(()=>{
        jest.clearAllMocks();
    })

    test('debe mostrar el componente correctamente',()=>{
        render(<TodoApp />);
        screen.debug();
        expect( screen.getByText('TODO 1') ).toBeTruthy();
        expect( screen.getByText('TODO 2') ).toBeTruthy();
        
    });
});