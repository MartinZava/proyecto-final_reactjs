import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

// Recordar etiqueta NavLink

export const NavBar = () => {
    return (
        <div>
            <nav id='navBar'>
                <ul id='lista'>
                    <Link to='/'><li><p id='marca'>KeyStore</p></li></Link>
                    <Link to='/categorias/teclados'><li><p className='lista__links'>Teclados</p></li></Link>
                    <Link to='/categorias/switches'><li><p className='lista__links'>Switches</p></li></Link>
                    <Link to='/categorias/cables'><li><p className='lista__links'>Cables</p></li></Link>
                    <Link to='/cart'>
                        <li> <CartWidget /></li>
                    </Link>
                </ul>
            </nav>
        </div>

    )
}

export default NavBar


