import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

    const { counter, operaciones  } = useCounter(1);
    //const { counter, operaciones } = useCounter( 20 ); // Custom Hook
    const { data, isLoading, hasError  } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}` );

    console.log(data);
    const { author, quote } = !!data && data[0];

    // if( isLoading ){
    //     return (<h1>Cargando...</h1>);
    // }

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr/>
        <div className="text-start form-control">
            <button className="btn btn-primary" onClick={ () => operaciones.suma() }>
                More Quotes 
            </button>
            <button className="btn btn-primary" onClick={ () => operaciones.reset() }>
                Reset Quotes 
            </button>
            <button className="btn btn-primary" onClick={ () => operaciones.resta() }>
                Less Quotes 
            </button>
            <p className="mb-3"> Quotes: {!!data && data.length }</p>
            <p className="mb-3"> Counter: { JSON.stringify(counter) } </p>
        </div>
        
        {
            ( isLoading ) 
            ? ( 
                <div className="alert alert-info text-center">
                    Loading...
                </div>
            )
            : (
                data.map( (d) => (
                    <blockquote className="blockquote text-end">
                        <p className="mb-3">{ d.quote }</p>
                        <footer className="blockquote-footer">{ d.author } </footer>
                    </blockquote> 
                ))
            )
            
        }

    </>
  )
}
