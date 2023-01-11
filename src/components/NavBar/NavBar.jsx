import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css'

// Recordar etiqueta NavLink

export const NavBar = () => {
    return (
        <div>
            <nav id='navBar'>
                <ul id='list'>
                    <Link to='/'><li><p className='hvr-wobble-horizontal' id='brand'>KeyStore</p></li></Link>
                    <Link to='/categorias/teclados'><li><p className='list__links'>Teclados</p></li></Link>
                    <Link to='/categorias/switches'><li><p className='list__links'>Switches</p></li></Link>
                    <Link to='/categorias/cables'><li><p className='list__links'>Cables</p></li></Link>
                    <Link to='/cart'>
                        <li> <CartWidget /></li>
                    </Link>
                </ul>
            </nav>
        </div>

    )
}

export default NavBar


