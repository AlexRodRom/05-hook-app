import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ( { target } ) => {
        const { value, name } = target;
        //onCapitalize( { value, name } );
        setFormState( { ...formState, [ name ]: value } );
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    // const onCapitalize = ( { value, name }) => {
    //     setFormState( { ...formState,  [name]: value.toUpperCase() } );
    // }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
  }
}
