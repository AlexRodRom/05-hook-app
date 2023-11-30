import { renderHook } from "@testing-library/react";
import { useCounter } from "../../hooks";
import { act } from "react-dom/test-utils";

describe('Pruebas en el useCounter', () => {

    test('debe retornar los valores por defecto', () => {

        const { result } = renderHook( () => useCounter() );
        const { counter, operaciones } = result.current;

        expect(counter).toBe(10);
        expect(operaciones.suma).toEqual(expect.any( Function ));
        expect(operaciones.resta).toEqual(expect.any( Function ));
        expect(operaciones.reset).toEqual(expect.any( Function ));

    });

    test('debe retornar el valor de 100', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;

        expect(counter).toBe(100);

    });

    test('debe retornar el valor incrementado en 1', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { operaciones } = result.current;
        
        act(() => {
            operaciones.suma(); 
        });

        expect(result.current.counter).toBe(101);

    });

    test('debe retornar el valor decrementado en 1', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { operaciones } = result.current;
        act(() => {
            operaciones.resta();
        });
        expect(result.current.counter).toBe(99);

    });

    test('debe retornar el valor reseteado', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { operaciones } = result.current;
        act(() => {
            operaciones.suma();
            operaciones.reset();
        });
        expect(result.current.counter).toBe(100);

    });




});