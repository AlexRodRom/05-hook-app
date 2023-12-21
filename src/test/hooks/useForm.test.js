import { renderHook } from "@testing-library/react";
import { useForm } from "../../hooks/useForm";



describe('Prubeas en el useForm', () => { 

    const initialForm = { 
        username: 'Alejandro',
            email: 'a@google.com'
    }
    
    test('debe devolver la informacion por defecto', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const { formState } = result.current;
        console.log("formState: "+ JSON.stringify(formState));
        expect(formState).toMatchObject(initialForm);
    });
 });