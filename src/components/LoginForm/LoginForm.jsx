import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import './LoginForm.css'

const LoginForm = ({ onClose, switchToSignUp }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { signIn, loading } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    const { error } = await signIn(email, password)
    
    if (error) {
      setError(error.message)
    } else {
      onClose()
    }
  }

  return (
    <div className="login-form-overlay" onClick={onClose}>
      <div className="login-form" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <h2>Sign In to Contract King</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={loading}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              disabled={loading}
            />
          </div>
          
          <button 
            type="submit" 
            className="submit-btn"
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        
        <p className="switch-form">
          Don't have an account?{' '}
          <button 
            type="button" 
            className="link-btn"
            onClick={switchToSignUp}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
