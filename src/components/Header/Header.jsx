import './Header.css';
import { FaChevronDown } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import LoginForm from '../LoginForm/LoginForm';
import SignupForm from '../SignupForm/SignupForm';

// src/components/Header/Header.jsx

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showSignupForm, setShowSignupForm] = useState(false);
    const dropdownTimeout = useRef(null);
    const { user, signOut, loading } = useAuth();

    if (isMenuOpen) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }

    const handleDropdownEnter = () => {
        if (dropdownTimeout.current) {
            clearTimeout(dropdownTimeout.current);
            dropdownTimeout.current = null;
        }
        setDropdownOpen(true);
    };

    const handleDropdownLeave = () => {
        dropdownTimeout.current = setTimeout(() => {
            setDropdownOpen(false);
        }, 150);
    };

    const handleSignOut = async () => {
        await signOut();
        setIsMenuOpen(false);
    };

    const openLoginForm = () => {
        setShowLoginForm(true);
        setIsMenuOpen(false);
    };

    const openSignupForm = () => {
        setShowSignupForm(true);
        setIsMenuOpen(false);
    };

    const switchToSignUp = () => {
        setShowLoginForm(false);
        setShowSignupForm(true);
    };

    const switchToLogin = () => {
        setShowSignupForm(false);
        setShowLoginForm(true);
    };

    const closeAuthForms = () => {
        setShowLoginForm(false);
        setShowSignupForm(false);
    };

    const closeMobileMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
            <Link to="/" className="logo">Contract King</Link>
            <nav className="desktop-nav-links">
                <Link to="/about-us">About us</Link>
                
                {user ? (
                    // Authenticated user navigation
                    <div
                        className="dropdown"
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleDropdownLeave}
                    >
                        <span className="dropdown-label">
                            {user.email}
                            <span
                                className={`chevron ${dropdownOpen ? 'open' : ''}`}
                                style={{ display: 'inline-block', transition: 'transform 0.2s' }}
                            >
                                <FaChevronDown size={14} />
                            </span>
                        </span>
                        <div
                            className={`dropdown-menu${dropdownOpen ? ' open' : ''}`}
                            onMouseEnter={handleDropdownEnter}
                            onMouseLeave={handleDropdownLeave}
                        >
                            <Link to="/employer/contracts">My Contracts</Link>
                            <button onClick={handleSignOut} disabled={loading}>
                                {loading ? 'Signing out...' : 'Sign out'}
                            </button>
                        </div>
                    </div>
                ) : (
                    // Non-authenticated user navigation
                    <div
                        className="dropdown"
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleDropdownLeave}
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
                        <div
                            className={`dropdown-menu${dropdownOpen ? ' open' : ''}`}
                            onMouseEnter={handleDropdownEnter}
                            onMouseLeave={handleDropdownLeave}
                        >
                            <button onClick={openSignupForm}>Create an account</button>
                            <button onClick={openLoginForm}>Sign in</button>
                        </div>
                    </div>
                )}
                
                <button className="white-btn post-contract">Post a contract</button>
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
                        <Link to="/about-us" onClick={closeMobileMenu}>About us</Link>
                        
                        {user ? (
                            // Authenticated mobile navigation
                            <div className="mobile-dropdown">
                                <span 
                                    className="mobile-dropdown-label"
                                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', userSelect: 'none' }}
                                >
                                    {user.email}
                                    <span style={{ marginLeft: 8, transition: 'transform 0.2s', transform: mobileDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                        <FaChevronDown size={16} />
                                    </span>
                                </span>
                                {mobileDropdownOpen && (
                                    <div className="mobile-dropdown-menu">
                                        <Link to="/employer/contracts" onClick={closeMobileMenu} style={{ paddingLeft: 24, display: 'block' }}>My Contracts</Link>
                                        <button 
                                            onClick={handleSignOut} 
                                            disabled={loading}
                                            style={{ paddingLeft: 24, display: 'block', background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
                                        >
                                            {loading ? 'Signing out...' : 'Sign out'}
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            // Non-authenticated mobile navigation
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
                                        <button 
                                            onClick={openSignupForm}
                                            style={{ paddingLeft: 24, display: 'block', background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
                                        >
                                            Create an account
                                        </button>
                                        <button 
                                            onClick={openLoginForm}
                                            style={{ paddingLeft: 24, display: 'block', background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                        
                        <button className="white-btn mobile-post-contract">Post a contract</button>
                    </nav>
                </div>
            )}
            
            {/* Auth Forms */}
            {showLoginForm && (
                <LoginForm 
                    onClose={closeAuthForms}
                    switchToSignUp={switchToSignUp}
                />
            )}
            {showSignupForm && (
                <SignupForm 
                    onClose={closeAuthForms}
                    switchToLogin={switchToLogin}
                />
            )}
        </header>
    );
}

export default Header;