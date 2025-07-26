import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'
import DeleteAccountModal from '../components/DeleteAccountModal/DeleteAccountModal'
import './ProfilePage.css'

const ProfilePage = () => {
  const { user } = useAuth()
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [userMetadata, setUserMetadata] = useState(null)

  useEffect(() => {
    if (user) {
      // Get additional user metadata
      setUserMetadata({
        createdAt: new Date(user.created_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        lastSignIn: user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }) : 'Never',
        emailConfirmed: user.email_confirmed_at ? 'Yes' : 'No',
        userId: user.id
      })
    }
  }, [user])

  const handlePasswordChange = async (e) => {
    e.preventDefault()
    setError('')
    setMessage('')

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError('Please fill in all password fields')
      return
    }

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match')
      return
    }

    if (newPassword.length < 6) {
      setError('New password must be at least 6 characters')
      return
    }

    try {
      setLoading(true)

      // First verify current password by trying to sign in
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: currentPassword
      })

      if (signInError) {
        setError('Current password is incorrect')
        return
      }

      // Update password
      const { error: updateError } = await supabase.auth.updateUser({
        password: newPassword
      })

      if (updateError) {
        setError(updateError.message)
        return
      }

      setMessage('Password updated successfully!')
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')

    } catch (error) {
      setError('An error occurred while updating your password')
    } finally {
      setLoading(false)
    }
  }

  const handleResetPassword = async () => {
    try {
      setLoading(true)
      setError('')
      setMessage('')

      const { error } = await supabase.auth.resetPasswordForEmail(user.email, {
        redirectTo: `${window.location.origin}/reset-password`
      })

      if (error) {
        setError(error.message)
      } else {
        setMessage('Password reset email sent! Check your inbox.')
      }
    } catch (error) {
      setError('An error occurred while sending reset email')
    } finally {
      setLoading(false)
    }
  }

  if (!user) {
    return (
      <div className="profile-page">
        <div className="profile-container">
          <p>Please sign in to view your profile.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <header className="profile-header">
          <h1>Contract King Account</h1>
          <p>Your current email address and password for your account</p>
        </header>

        <div className="profile-content">
          {/* Account Information Section */}
          <section className="profile-section">
            <h2>Your Details</h2>
            
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                value={user.email}
                disabled
                className="profile-input readonly"
              />
            </div>

            {userMetadata && (
              <>
                <div className="form-group">
                  <label htmlFor="userId">User ID</label>
                  <input
                    id="userId"
                    type="text"
                    value={userMetadata.userId}
                    disabled
                    className="profile-input readonly"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="emailConfirmed">Email verified</label>
                  <input
                    id="emailConfirmed"
                    type="text"
                    value={userMetadata.emailConfirmed}
                    disabled
                    className="profile-input readonly"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="memberSince">Member since</label>
                  <input
                    id="memberSince"
                    type="text"
                    value={userMetadata.createdAt}
                    disabled
                    className="profile-input readonly"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastSignIn">Last sign in</label>
                  <input
                    id="lastSignIn"
                    type="text"
                    value={userMetadata.lastSignIn}
                    disabled
                    className="profile-input readonly"
                  />
                </div>
              </>
            )}
          </section>

          {/* Password Section */}
          <section className="profile-section">
            <h2>Set a password</h2>
            
            {message && <div className="success-message">{message}</div>}
            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handlePasswordChange}>
              <div className="form-group">
                <label htmlFor="currentPassword">Current Password</label>
                <input
                  id="currentPassword"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter your current password"
                  disabled={loading}
                  className="profile-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="newPassword">New Password</label>
                <input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter your new password (min 6 characters)"
                  disabled={loading}
                  className="profile-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm New Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your new password"
                  disabled={loading}
                  className="profile-input"
                />
              </div>

              <button 
                type="submit" 
                className="update-password-btn"
                disabled={loading}
              >
                {loading ? 'Updating...' : 'Update Password'}
              </button>
            </form>

            <button 
              type="button" 
              className="reset-password-link"
              onClick={handleResetPassword}
              disabled={loading}
            >
              Reset password
            </button>
          </section>

          {/* Account Management Section */}
          <section className="profile-section account-management">
            <h2>Account Management</h2>
            <p>Once you delete your account, there is no going back. Please be certain.</p>
            
            <button 
              className="delete-account-btn"
              onClick={() => setShowDeleteModal(true)}
            >
              Delete Account
            </button>
          </section>
        </div>
      </div>

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <DeleteAccountModal 
          onClose={() => setShowDeleteModal(false)}
          user={user}
        />
      )}
    </div>
  )
}

export default ProfilePage
