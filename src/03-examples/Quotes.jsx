import { Quote } from "./quote"

export const Quotes = ( { data } ) => {

  return (
    <>
        {
            data.map( ({ quote, author }) => (
                <Quote
                    key= { quote } 
                    quote= { quote }
                    author= { author }
                />
            ))       
        }
    </>
  )
}
