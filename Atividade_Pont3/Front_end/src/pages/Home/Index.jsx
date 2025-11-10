// Front_end\src\pages\HomePage\Index.jsx

import { Link } from 'react-router-dom';
import './style.css';

function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero__text">
          <h1>Drogaria Popular</h1>
          <p>
            Seu bem-estar é a nossa prioridade. Oferecemos uma ampla gama de medicamentos e produtos de saúde.
          </p>
          <div className="hero__cta">
            <Link to="/servicos" className="btn primary">
              Conheça nossos Serviços
            </Link>
            <Link to="/fale-conosco" className="btn secondary">
              Fale com um dos nossos atendentes
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Por que nos escolher?</h2>
        <div className="grid cols-3">
          <div className="card">
            <h3>Atendimento prioritário</h3>
            <p>Suporte rápido pelo WhatsApp.</p>
          </div>
          <div className="card">
            <h3>Avaliamos receitas via WhatsApp</h3>
            <p>
              Envie sua receita pelo WhatsApp e receba a melhor orientação. Para poupar tempo, utilize nosso
              atendimento online.
            </p>
          </div>
          <div className="card">
            <h3>Receba seus medicamentos em casa</h3>
            <p>Solicite a entrega pelo WhatsApp e receba seus produtos no conforto da sua casa.</p>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="socialProof">
        <div className="socialProof__text">
          <h2>Mais de 50 farmácias espalhadas por todo o Brasil</h2>
          <p>
            Estamos presentes em diversos estados, oferecendo suporte e soluções personalizadas para cada cliente.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
