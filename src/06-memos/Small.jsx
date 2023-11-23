import { memo } from 'react';

// de esta forma se ve al usar CRA "React.memo"
//export const Small = React.memo(({ value }) => { 
export const Small = memo(({ value }) => {

    console.log("Me volví a generar:)");

  return (
    <>
        <small>{ value }</small>
    </>
  )
})
