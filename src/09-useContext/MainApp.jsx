import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { AboutPage } from "./AboutPage"
import { NavBar } from "./NavBar"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {

  return (
    <UserProvider>
        {/* <h1>Main App</h1>  */}

        {/* //Esto hace refrescar la pagina entera par nohacer esto usamos LINK -> to
            <a href="/">Home </a>
            <a href="/about"> About </a>
            <a href="/login"> Login </a> 
        */}

        <NavBar/>
        
        <hr/>
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='about' element={<AboutPage />} />
            
            {/* <Route path='*' element={ <HomePage /> } /> */}
            <Route path='*' element={ <Navigate to="/about"/> } /> {/*si la ruta no existe te lleva al about y cambia la URL al about. */}
         </Routes>

    </UserProvider>
  )
}
