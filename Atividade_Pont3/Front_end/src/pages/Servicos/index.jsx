// Front_end\src\pages\Servicos\index.jsx

import './style.css';

function Servicos() {
    return (
        <section className="servicos">
            <h1>Serviços farmacêuticos</h1>
            <p>Entregamos para toda a cidade</p>

            <div className='grid cols-3'>
                <div className='card'>
                    <h3>Atendimento farmacêutico</h3>
                    <p>Orientação sobre medicamentos e tratamentos.</p>
                </div>
                <div className='card'>
                    <h3>Orientação farmacêutica</h3>
                    <p>Esclareça suas dúvidas sobre medicamentos e tratamentos.</p>
                </div>
                <div className='card'>
                    <h3>Aceitamos todos as formas de pagamento</h3>
                    <p>Cartão de crédito, débito e dinheiro.</p>
                </div>
            </div>
        </section>
    );
}

export default Servicos;