import "./Footer.css"
import { Icon } from "@iconify/react"


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__links">
                <a href="" className="footer__links--ind">Home</a>
                <a href="" className="footer__links--ind">Soporte</a>
                <a href="" className="footer__links--ind">Contacto</a>
                <a href="" className="footer__links--ind">Sobre Nosotrxs</a>
            </div>
            <p className="footer__p">Seguinos en nuestras redes! </p>
            <div className="footer__social">

                <a href="" className="hvr-float"><Icon icon="icon-park:instagram" width="50" height="50" /></a>
                <a href="" className="hvr-float"><Icon icon="icon-park:facebook" width="50" height="50" /></a>
                <a href="" className="hvr-float"><Icon icon="icon-park:mail" width="50" height="50" /></a>
                <a href="https://github.com/MartinZava" target="_blank" className="hvr-float"><Icon icon="mdi:github" color="white" width="50" height="50" /></a>
            </div>
            <div className="footer__credits">
                <p>Proyecto creado por <a href="https://github.com/MartinZava" target="_blank">MartinZava</a></p>
            </div>

        </div>
    )
}

export default Footer
