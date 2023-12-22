import { todoReducer } from "../../08-useReducer/todoReducer";

describe('Puebas en todo el reducer', ()=>{

    const initialState = [{
        id: 1,
        description: "Demo Todo",
        done: false
    }];
    
    test('debe devolver el estado inicial', ()=>{

        const newState = todoReducer( initialState, {});
        expect( newState ).toBe( initialState );
    });

    test('debe agregar un todo', ()=>{

        const addAction = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: "new todo",
                done: false
            }
        };

        const newState = todoReducer( initialState, addAction);
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( addAction.payload );
    });


    test('debe eliminar un todo', ()=>{
        const addAction = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: "new todo",
                done: false
            }
        };

        const deleteAction = {
            type: '[TODO] Delete Todo',
            payload: {
                id: 2,
                description: "new todo",
                done: false
            }
        };

        const newState = todoReducer( initialState, addAction);
        const newState2 = todoReducer( newState, deleteAction);
        expect( newState2.length ).toBe( 1 );
    });

    test('debe toggle el todo', ()=>{
        const toggleAction = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, toggleAction);
        expect( newState.length ).toBe( 1 );
        expect( newState[0].done ).toBeTruthy();
    });
});