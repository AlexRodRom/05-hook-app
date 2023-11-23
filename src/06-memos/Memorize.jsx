import { useState } from "react"
import { useCounter } from "../hooks"
import { Small } from "./Small"

export const Memorize = () => { 

   const { counter, operaciones } = useCounter(10);
   const [ show, setShow ] = useState(true);

  return (
    <>
        <h1>Counter: <Small value={ counter } /> </h1>
        <hr/>

        {
            show &&
            (
                <>
                    <button 
                        className="btn btn-primary" 
                        onClick={ () => operaciones.suma() }>
                        +1
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={ operaciones.reset }>
                        Reset
                    </button>
                    <button
                        className="btn btn-primary" 
                        onClick={  () => operaciones.resta() }>
                        +1
                    </button>
                </>
            )
        }

        <button
            className="btn btn-outline-primary" 
            onClick={  () => setShow( !show ) }>
            Show / Hide ( { JSON.stringify(show) } )
        </button>

    </>
  )
}
