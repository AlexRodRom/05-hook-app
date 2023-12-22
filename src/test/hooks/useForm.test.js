import { fireEvent, renderHook } from "@testing-library/react";
import { useForm } from "../../hooks/useForm";
import { act } from "react-dom/test-utils";


describe('Prubeas en el useForm', () => { 

    const initialForm = { 
        username: 'Alejandro',
        email: 'a@google.com'
    }
    
    test('debe devolver la informacion por defecto', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const { formState } = result.current;
        //console.log("formState: "+ JSON.stringify(formState));
        expect(formState).toMatchObject(initialForm);
    });

    test('Debe de cambiar el nombre del formulario', () => {
        
        const newValue = 'Juan'
        const newTarget = {
                            target :
                            { 
                                name :'username',
                                value : newValue
                            }
                        };

        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange } = result.current;
        act(() => {
            onInputChange(newTarget);
        });
        //console.log("result.current.username: "+ JSON.stringify(result.current.username));
        //console.log("result.current.formState.username: "+ JSON.stringify(result.current.formState.username));

        expect(result.current.username).toEqual(newValue);
        expect(result.current.formState.username).toEqual(newValue);
    });

    test('Debe devolver el valor del formulario por defecto', () => {
        
        const newValue = 'Juan'
        const newTarget = {
                            target :
                            { 
                                name :'username',
                                value : newValue
                            }
                        };

        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange, onResetForm } = result.current;
        act(() => {
            onInputChange(newTarget);
            onResetForm();
        });
        console.log("result.current.username: "+ JSON.stringify(result.current.username));
        console.log("result.current.formState.username: "+ JSON.stringify(result.current.formState.username));

        expect(result.current.username).toEqual(initialForm.username);
        expect(result.current.formState.username).toEqual(initialForm.username);
    });

 });