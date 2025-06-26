import { FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">Contract King</div>
      <nav className="footer-links">
        <a href="#">About us</a>
        <a href="#">Post a contract</a>
        <a href="#">Why post with us?</a>
      </nav>
      <div className="social-icons">
        <a href="#" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer; 