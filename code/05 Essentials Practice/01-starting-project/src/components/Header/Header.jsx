import logo from '../../assets/investment-calculator-logo.png';
import './Header.css';

function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Investment Calculator" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

export default Header;