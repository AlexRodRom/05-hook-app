import { UserContext } from "./UserContext"

const user = {
    id: 123,
    name: 'Alejandro Rodriguez',
    email: 'alejandro@hotmail.es'
}

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ Hola: 'Mundo', user: user}}>
        { children }
    </UserContext.Provider>
  )
}
