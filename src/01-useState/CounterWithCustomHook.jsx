import { useCounter } from "../hooks/useCounter";

 
export const CounterWithCustomHook = () => {

    const { counter, operaciones } = useCounter( 20 ); // Custom Hook

    return (
        <>
        <h1>Counter With Custom Hook: { counter }</h1>
        <hr/>
        <button className="btn btn-primary" onClick={ () => operaciones.suma( 2 ) }>+</button>
        <button className="btn btn-primary" onClick={ operaciones.reset }>Reset</button>
        <button className="btn btn-primary" onClick={ () => operaciones.resta( 3 ) }>-</button>
        </>
    )
}
