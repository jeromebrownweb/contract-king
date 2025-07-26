import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { supabase } from '../../lib/supabase'
import './DeleteAccountModal.css'

const DeleteAccountModal = ({ onClose, user }) => {
  const { signOut } = useAuth()
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [confirmationText, setConfirmationText] = useState('')

  const handleDeleteAccount = async (e) => {
    e.preventDefault()
    setError('')

    if (!password) {
      setError('Please enter your password to confirm deletion')
      return
    }

    if (confirmationText !== 'DELETE') {
      setError('Please type "DELETE" to confirm account deletion')
      return
    }

    try {
      setLoading(true)

      // First verify password by trying to sign in
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: password
      })

      if (signInError) {
        setError('Password is incorrect')
        return
      }

      // Delete the user account
      // Note: In a production app, you'd typically call a backend API
      // that handles user deletion securely. For now, we'll sign them out
      // and show a message that their account deletion is pending.
      
      // In a real implementation, you would:
      // 1. Call your backend API to mark account for deletion
      // 2. Your backend would handle the actual Supabase user deletion
      // 3. Send confirmation email, etc.
      
      // For this demo, we'll just sign out the user
      await signOut()
      
      // In production, you'd show a different message about account deletion being processed
      alert('Account deletion requested. You have been signed out. In a production app, your account would be scheduled for deletion.')
      
      onClose()
      window.location.href = '/'

    } catch (error) {
      setError('An error occurred while deleting your account')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="delete-modal-overlay" onClick={onClose}>
      <div className="delete-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="delete-modal-header">
          <h2>Delete Account</h2>
          <button className="close-btn" onClick={onClose} disabled={loading}>
            ×
          </button>
        </div>

        <div className="delete-modal-body">
          <div className="warning-section">
            <div className="warning-icon">⚠️</div>
            <div className="warning-text">
              <h3>This action cannot be undone</h3>
              <p>
                Deleting your account will permanently remove all your data, including:
              </p>
              <ul>
                <li>Your profile information</li>
                <li>All job postings you've created</li>
                <li>Application history</li>
                <li>All account settings</li>
              </ul>
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleDeleteAccount} className="delete-form">
            <div className="form-group">
              <label htmlFor="deletePassword">
                Enter your password to confirm deletion:
              </label>
              <input
                id="deletePassword"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your current password"
                disabled={loading}
                className="delete-input"
                autoComplete="current-password"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmationText">
                Type "DELETE" to confirm:
              </label>
              <input
                id="confirmationText"
                type="text"
                value={confirmationText}
                onChange={(e) => setConfirmationText(e.target.value)}
                placeholder="Type DELETE here"
                disabled={loading}
                className="delete-input"
              />
            </div>

            <div className="modal-actions">
              <button 
                type="button" 
                className="cancel-btn"
                onClick={onClose}
                disabled={loading}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="delete-confirm-btn"
                disabled={loading || !password || confirmationText !== 'DELETE'}
              >
                {loading ? 'Deleting...' : 'Delete Account'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DeleteAccountModal
