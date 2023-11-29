import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { AboutPage } from "./AboutPage"

export const MainApp = () => {
  return (
    <>
        <h1>Main App</h1> 
        <hr/>
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='about' element={<AboutPage />} />
            
            {/* <Route path='*' element={ <HomePage /> } /> */}
            <Route path='*' element={ <Navigate to="/about"/> } /> {/*si la ruta no existe te lleva al about y cambia la URL al about. */}
         </Routes>

    </>
  )
}
