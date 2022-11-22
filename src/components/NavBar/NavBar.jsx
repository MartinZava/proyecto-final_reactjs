import './NavBar.css'
import { Icon } from '@iconify/react';



export const NavBar = () => {
    return (
        <div>
            <nav id='navBar'>
                <ul id='lista'>
                    <li><a href="" id='marca'>Marca</a></li>
                    <li><a href="" className='lista__links'>Tienda</a></li>
                    <li><a href="" className='lista__links'>Contacto</a></li>
                    <li><a href="" className='lista__links'>Galeria</a></li>
                    <li><a href="" className='lista__links--carrito'><Icon icon="ph:shopping-cart-simple-light" height="25" inline={true} /></a>1</li>
                </ul>
            </nav>
        </div>

    )
}

export default NavBar