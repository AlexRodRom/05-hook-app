import { render, screen } from "@testing-library/react";
import { HomePage } from "../../09-useContext/HomePage";
import { UserContext } from "../../09-useContext/context/UserContext";

const usuario = {
    id: 555,
    name: 'Fernando Fernandez',
    email: 'Fernando.Fernandez@hotmail.es'
}

describe('Pruebas en <HomePage/>',() => {

    test('debe mostrar el componente  SIN el usuario',()=>{
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage/>
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre'); //aria-label
        expect( preTag.innerHTML ).toBe( 'null' );
        //screen.debug();
    });

    test('debe mostrar el componente CON el usuario',()=>{
        render(
            <UserContext.Provider value={{ user:usuario }}>
                <HomePage/>
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre'); //aria-label
        expect( preTag.innerHTML ).toContain(  usuario.name );
        screen.debug();
    });
});