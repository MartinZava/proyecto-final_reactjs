import "./Footer.css"
import { Icon } from "@iconify/react"


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__links">
                <a href="">Home</a>
                <a href="">Support</a>
                <a href="">Contact</a>
                <a href="">About Us</a>
            </div>
            <div className="footer__credits">
                <p>Proyecto creado por <a href="https://github.com/MartinZava" target="_blank">MartinZava</a></p>
            </div>
            <div className="footer__social">
                <a href=""><Icon icon="icon-park:instagram" width="50" height="50" /></a>
                <a href=""><Icon icon="icon-park:facebook" width="50" height="50" /></a>
                <a href=""><Icon icon="icon-park:mail" width="50" height="50" /></a>
                <a href="https://github.com/MartinZava" target="_blank"><Icon icon="mdi:github" color="white" width="50" height="50" /></a>
            </div>
        </div>
    )
}

export default Footer
