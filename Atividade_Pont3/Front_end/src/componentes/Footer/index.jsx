// Front_end\src\componentes\Footer\index.jsx

import './style.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrap">
                <div>
                    <strong>Drogaria Popular</strong> - CNPJ: 00.000.000/0001-00
                </div>
                <div>
                    Avenida Dendezeiros, 890 - Bonfim - Salvador/BA
                </div>
            </div>
            
            <div className="copy">
                © {new Date().getFullYear()} Todos os direitos reservados.
            </div>
        </footer>
    );
}

export default Footer;