import React, { useEffect, useState } from 'react'

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
        console.log("useEffect called!");
    }, [])

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
            </form>
        </>
    )
}
