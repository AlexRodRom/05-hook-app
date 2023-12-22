import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', ()=> {

    const mockOperacionesSuma = jest.fn();
    const mockOperacionesResta = jest.fn();
    const mockOperacionesReset = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        operaciones: { 
            suma: mockOperacionesSuma,
            resta: mockOperacionesResta,
            reset: mockOperacionesReset
        },
    });

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('debe mostrar el component por defecto', ()=> {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        expect(screen.getAllByText('Loading...'));
        expect(screen.getAllByText('BreakingBad Quotes'));

        //const nextButton = screen.getByRole('button', { name : 'More Quotes'});
        //expect(nextButton.disabled).toBeTruthy();
        screen.debug();
    });

    test('debe mostrar una Quote', ()=> {

        useFetch.mockReturnValue({
            data: [{ author:'Alejandro', quote: "Hola Alejandro!" }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Hola Alejandro!')).toBeTruthy();
        expect(screen.getByText("Alejandro")).toBeTruthy();
        const nextButton = screen.getByRole('button', { name : 'More Quotes'});
        expect(nextButton.disabled).toBeFalsy();
        screen.debug();
    });

    test('debe llamar la funcion de incrementar', ()=> {

        useFetch.mockReturnValue({
            data: [{ author:'Alejandro', quote: "Hola Alejandro!" }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name : 'More Quotes'});
        fireEvent.click(nextButton);
        expect( mockOperacionesSuma ).toHaveBeenCalled();
        screen.debug();
    });

});