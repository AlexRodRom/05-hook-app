import { useContext } from "react"
import { UserContext } from "./context/UserContext";


  const newUser = {
    id: 123,
    name: 'Alejandro Rodriguez',
    email: 'alejandro@hotmail.es'
}

export const LoginPage = () => {

  const { user, setUser } = useContext(UserContext);

  return (
    <>
        <h1>LoginPage</h1>
        <hr/>
        <pre aria-label="pre">
          { JSON.stringify( user, null, 3) }
        </pre>

        <button
          aria-label="buttonSetUser"
          className="btn btn-primary"
          onClick={ () => setUser( newUser ) }>
            Set User
        </button>
    </>
  )
}
