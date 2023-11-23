import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);
    
    const incrementParent = useCallback(
      (value) => {
        setCounter( (c) => c + value );
      },
      [],
    )

    useEffect(() => {
        //incrementParent();
    }, [incrementParent])
    
    
    // const incrementParent = () => {
    //     setCounter( counter +1 );
    // }


  return (
    <>
        <h1>useCallBack Hook: <small>{ counter }</small></h1>
        <hr/>
        <ShowIncrement increment={ incrementParent } />
    </>
  )
}
