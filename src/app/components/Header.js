

'use client'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/slices/authSlice'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Header() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { isAuthenticated, user } = useSelector((state) => state.auth)

  const handleLogout = () => {
    dispatch(logout())
    router.push('/login')
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Affichage du nom en texte statique */}
        <span className="navbar-brand custom-brand">
          {isAuthenticated && user ? `Bienvenue, ${user.name}` : 'Christie Louis'}
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: '#333' }}
        >
          <span className="navbar-toggler-icon" />
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          {isAuthenticated && (
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/">Accueil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/projets/projet1">Projet 1</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/projets/projet2">Projet 2</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/temoignages">Témoignages</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">Contact</Link>
              </li>
            </ul>
          )}
          <ul className="navbar-nav ms-auto">
            {isAuthenticated ? (
              <li className="nav-item">
                <button
                  className="btn"
                  style={{
                    backgroundColor: 'var(--taupe-rose)',
                    color: '#fff',
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" href="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/inscription">Inscription</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
