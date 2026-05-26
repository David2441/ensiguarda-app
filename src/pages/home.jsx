function Home() {
  return (
    <>
      <main className="home-container">

        {/* HERO */}
        <section className="hero">

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <h1>Ensiguarda</h1>

            <p>
              Guardamos o teu futuro (no mc)
            </p>

            <div className="hero-buttons">

              <button className="primary-btn">
                Ver Horários →
              </button>

              <button className="secondary-btn">
                Reservar Sala
              </button>

            </div>

          </div>

        </section>

        {/* SUMMARY */}
        <section className="summary">

          <h2>Resumo Rápido</h2>

          <div className="cards-grid">

            <div className="card">
              <div>
                <span>Aulas Hoje</span>
                <h3>67</h3>
              </div>

              <div className="icon blue">
                📅
              </div>
            </div>

            <div className="card">
              <div>
                <span>Salas Reservadas</span>
                <h3>67</h3>
              </div>

              <div className="icon green">
                🚪
              </div>
            </div>

            <div className="card">
              <div>
                <span>Eventos Próximos</span>
                <h3>67</h3>
              </div>

              <div className="icon purple">
                ✨
              </div>
            </div>

            <div className="card">
              <div>
                <span>Notificações</span>
                <h3>67</h3>
              </div>

              <div className="icon orange">
                🔔
              </div>
            </div>

          </div>

        </section>

        {/* ALERTAS */}
        <section className="alerts-section">

          <h2>Alertas Recentes</h2>

          <div className="alerts-container">

            <div className="alert-card">
              <div className="alert-icon">!</div>

              <div>
                <h4>Mudança de sala: Matemática agora será na Sala 767</h4>
                <p>Há 67 minutos</p>
              </div>
            </div>

            <div className="alert-card">
              <div className="alert-icon">!</div>

              <div>
                <h4>Evento amanhã: Palestra sobre inclusão às 67h no auditório</h4>
                <p>Há 67 horas</p>
              </div>
            </div>

            <div className="alert-card">
              <div className="alert-icon">!</div>

              <div>
                <h4>Sua reserva da Sala 676 foi confirmada</h4>
                <p>Há 67 horas</p>
              </div>
            </div>

          </div>

          <button className="see-all-btn">
            Ver todas as notificações →
          </button>

        </section>

        {/* ACESSO RÁPIDO */}
        <section className="quick-access">

          <h2>Acesso Rápido</h2>

          <div className="quick-grid">

            {/* CARD 1 */}
            <div className="quick-card">

              <div className="quick-image blue-bg"></div>

              <div className="quick-content">

                <div className="quick-icon blue">
                  📅
                </div>

                <h3>Consultar Horários</h3>

                <p>
                  Veja os horários de todas as turmas e disciplinas
                </p>

                <button>
                  Acessar →
                </button>

              </div>
            </div>

            {/* CARD 2 */}
            <div className="quick-card">

              <div className="quick-image green-bg"></div>

              <div className="quick-content">

                <div className="quick-icon green">
                  🚪
                </div>

                <h3>Reservar Sala</h3>

                <p>
                  Reserve salas para atividades e eventos especiais
                </p>

                <button>
                  Acessar →
                </button>

              </div>
            </div>

            {/* CARD 3 */}
            <div className="quick-card">

              <div className="quick-image purple-bg"></div>

              <div className="quick-content">

                <div className="quick-icon purple">
                  ✨
                </div>

                <h3>Ver Eventos</h3>

                <p>
                  Confira eventos, atividades e celebrações
                </p>

                <button>
                  Acessar →
                </button>

              </div>
            </div>

          </div>

        </section>
      </main>
    </>
  );
}

export default Home;