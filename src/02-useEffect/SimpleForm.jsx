import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [ formState, setFormState ] = useState(
        { 
            username: 'pos_ponerlo',
            email: 'alejandro.rodriguez@hotmail.es'
        } 
    );

    const { username, email } = formState;

    const onInputChange = ( { target } ) => {
        const { value, name } = target;
        setFormState( { ...formState, [ name ]: value } );
    }


    useEffect(() => {
        //console.log('useEffect Called!');
    }, [])

    useEffect(() => {
        //console.log('formState Changed!');
    }, [ formState ])

    useEffect(() => {
        //console.log('username Changed!');
    }, [ username ])

    useEffect(() => {
        //console.log('Email Changed!');
    }, [ email ])

    useEffect(() => { // component.unmounted
        //console.log('Email Changed!');
        return () => {

        }
    }, [ email ])
    

    return (
        <>
            <h1>Simple Form</h1>
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
                {
                    (username === 'pos_ponerlo2') && <Message />
                }
            </form>
        </>
    )
}
