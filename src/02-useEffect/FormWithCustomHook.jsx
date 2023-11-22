import React, { useEffect } from 'react'
import { Message } from './Message';
import { useForm } from '../01-useState/hooks/useForm';

export const FormWithCustomHook = () => {

    // const [ formState, setFormState ] = useState(
    //     { 
    //         username: '',
    //         email: '',
    //         password: ''
    //     } 
    // );

    // const { username, email, password } = formState;

    // const onInputChange = ( { target } ) => {
    //     const { value, name } = target;
    //     setFormState( { ...formState, [ name ]: value } );
    // }

    const { username, email, password , onInputChange } = useForm({ 
            username: '',
            email: '',
            password: ''
        } 
    );


    // useEffect(() => {
    //     //console.log('useEffect Called!');
    // }, [])

    // useEffect(() => {
    //     //console.log('formState Changed!');
    // }, [ formState ])

    // useEffect(() => {
    //     //console.log('username Changed!');
    // }, [ username ])

    // useEffect(() => {
    //     //console.log('Email Changed!');
    // }, [ email ])
    

    return (
        <>
            <h1>Formulario con Custom Hook</h1>
            <hr/>
            <form>
                <input 
                    type='text'
                    className='form-control'
                    placeholder='Username'
                    name='username'
                    value={ username }
                    onChange={ onInputChange }
                />
                <input 
                    type='text'
                    className='form-control mt-2'
                    placeholder='Email'
                    name='email'
                    value={ email }
                    onChange={ onInputChange }
                />
                <input 
                    type='password'
                    className='form-control mt-2'
                    placeholder='Contraseña'
                    name='password'
                    value={ password }
                    onChange={ onInputChange }
                />
                {
                    (username === 'pos_ponerlo2') && <Message />
                }
            </form>
        </>
    )
}
