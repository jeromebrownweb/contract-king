import './Header.css';
import { FaChevronDown } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

// src/components/Header/Header.jsx

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

    if (isMenuOpen) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }

    return (
        <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="logo">Contract King</div>
            <nav className="desktop-nav-links">
                <a href="#">About us</a>
                <div
                    className="dropdown"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                >
                    <span className="dropdown-label">
                        Employer account
                        <span
                            className={`chevron ${dropdownOpen ? 'open' : ''}`}
                            style={{ display: 'inline-block', transition: 'transform 0.2s' }}
                        >
                            <FaChevronDown size={14} />
                        </span>
                    </span>
                    {dropdownOpen && (
                        <div className="dropdown-menu">
                            <a href="#">Why post with us?</a>
                            <a href="#">Create an account</a>
                            <a href="#">Sign in</a>
                        </div>
                    )}
                </div>
                <button className="post-contract">Post a contract</button>
            </nav>
            <button
                className="menu-toggle-btn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
            {isMenuOpen && (
                <div className="mobile-menu-overlay">
                    <nav className="mobile-nav-links">
                        <a href="#">About us</a>
                        <div className="mobile-dropdown">
                            <span 
                                className="mobile-dropdown-label"
                                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', userSelect: 'none' }}
                            >
                                Employer account
                                <span style={{ marginLeft: 8, transition: 'transform 0.2s', transform: mobileDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                    <FaChevronDown size={16} />
                                </span>
                            </span>
                            {mobileDropdownOpen && (
                                <div className="mobile-dropdown-menu">
                                    <a href="#" style={{ paddingLeft: 24, display: 'block' }}>Why post with us?</a>
                                    <a href="#" style={{ paddingLeft: 24, display: 'block' }}>Create an account</a>
                                    <a href="#" style={{ paddingLeft: 24, display: 'block' }}>Sign in</a>
                                </div>
                            )}
                        </div>
                        <button className="mobile-post-contract">Post a contract</button>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;