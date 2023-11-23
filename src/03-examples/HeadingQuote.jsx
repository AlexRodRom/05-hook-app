
export const HeadingQuote = ({ data, counter, operaciones }) => {
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
    </>
  )
}
