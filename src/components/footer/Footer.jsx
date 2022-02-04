import React from 'react';
import './Footer.css';
const Footer = () => {
    return <footer class="footer-distributed">
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
        <div class="card bg-dark" id='cards'>
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
