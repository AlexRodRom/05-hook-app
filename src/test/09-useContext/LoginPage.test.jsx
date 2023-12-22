import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../09-useContext/LoginPage";
import { UserContext } from "../../09-useContext/context/UserContext";

const newUser = {
    id: 123,
    name: 'Alejandro Rodriguez',
    email: 'alejandro@hotmail.es'
}

describe('Pruebas en <LoginPage/>',() => {

    test('debe mostrar el componente  SIN el usuario',()=>{
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage/>
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre'); //aria-label
        expect( preTag.innerHTML ).toBe( 'null' );
        screen.debug();
    });

    test('debe llamar el SetUser cuando se hace click en el boton',()=>{
        
        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value={{ user: null , setUser: setUserMock }}>
                <LoginPage/>
            </UserContext.Provider>
        );
        const buttonSetUser = screen.getByLabelText('buttonSetUser'); //aria-label
        fireEvent.click( buttonSetUser );
        expect( setUserMock ).toHaveBeenCalledWith( newUser );
    });

});