import logoImg from '../assets/logo.jpg';

function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant"/>
        <h1>ReactFood</h1>
      </div>
      <nav>
        <button>Cart (0)</button>
      </nav>
    </header>
  );
}

export default Header;