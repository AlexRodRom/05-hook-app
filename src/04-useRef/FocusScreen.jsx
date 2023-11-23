import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();
    const inputRef2 = useRef();

    const onClickRef = () => {
        //document.querySelector("input").focus();
        //document.querySelector("input").select();

        // tendriamos un problema si tuvieramos mas de in input aunque se podrian poner names en los inputs seria poco eficiente
        // Por ello usaremos un useRef
        console.log(inputRef);
        inputRef.current.select();
    }

    const onClickRef2 = () => {
        //document.querySelector("input").focus();
        //document.querySelector("input").select();

        // tendriamos un problema si tuvieramos mas de in input aunque se podrian poner names en los inputs seria poco eficiente
        // Por ello usaremos un useRef
        console.log(inputRef2);
        inputRef2.current.select();
    }


  return (
    <>
        <h1>Focus Screen</h1>
        <hr/>

        <input
            ref={ inputRef }
            type="text"
            className="form-control"
            placeholder="Ingrese su nombre"

        />
        <input
            ref={ inputRef2 }
            type="text"
            className="form-control"
            placeholder="Ingrese su nombre"

        />

        <button 
            className="btn btn-primary mt-2"
            onClick={ onClickRef }>
            Set Focus 1
        </button>

        <button 
            className="btn btn-primary mt-2"
            onClick={ onClickRef2 }>
            Set Focus 2
        </button>

    </>
  )
}
