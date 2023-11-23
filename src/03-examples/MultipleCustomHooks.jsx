import { useCounter, useFetch } from "../hooks";
import { HeadingQuote, LoadingQuote, Quotes } from "./";

export const MultipleCustomHooks = () => {

    const { counter, operaciones  } = useCounter(1);
    const { data, isLoading  } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}` );

  return (
    <>
        <HeadingQuote data={ data } counter={ counter } operaciones={ operaciones }/>
        {
            isLoading 
            ? <LoadingQuote />
            : <Quotes data={ data } />
        }
    </>
  )
}
