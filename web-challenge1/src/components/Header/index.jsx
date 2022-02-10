import "./styles.css";

function Header() {
  return (
    <header id="header">
      <nav>
        <span className="nav-brand">
          <span>Let's</span>DoIt
        </span>

        <div className="profile">
          <img
            src="https://avatars.githubusercontent.com/u/13500056?v=4"
            alt="Walisson Silva - Imagem de Perfil"
          />

          <div>
            <p className="name">Walisson Silva</p>
            <p className="welcome-message">Bem-vindo(a) ao Let'sDoIt</p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
