import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget';



export const NavBar = () => {
    return (
        <div>
            <nav id='navBar'>
                <ul id='lista'>
                    <li><a href="" id='marca'>Marca</a></li>
                    <li><a href="" className='lista__links'>Tienda</a></li>
                    <li><a href="" className='lista__links'>Contacto</a></li>
                    <li><a href="" className='lista__links'>Galeria</a></li>
                    <li> <CartWidget /> 1</li>
                </ul>
            </nav>
        </div>

    )
}

export default NavBar