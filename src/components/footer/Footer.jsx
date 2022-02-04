import React from 'react';
import './Footer.css';
const Footer = () => {
    return <footer class="footer-distributed">

        <div class="card bg-dark">
            <p class="card-header">
                <a type="button" class="btn btn-dark" href="#"><img></img>Home</a>
                <a type="button" class="btn btn-dark" href="https://www.facebook.com/VasanMarcelo">Facebook</a>
                <a type="button" class="btn btn-dark" href="tel:+5195692143">Celular</a>
                <a type="button" class="btn btn-dark" href="https://wa.me/+51956214634">Whatsapp</a>
                <a type="button" class="btn btn-dark" href='https://www.linkedin.com/in/marcelo-vasan/'>Linkedin</a>
            </p>
        </div>
        <p class="nav-item" id='autor'>Marcelo Sanchez Vasquez &copy; 2022, Todos los derechos reservados</p>
    </footer>;

};

export default Footer;
