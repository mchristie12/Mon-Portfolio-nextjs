
'use client'
import { useSelector } from 'react-redux'
import ProtectedRoute from '../components/ProtectedRoute'
import Link from 'next/link'

export default function TemoignagesList() {
  const { temoignages } = useSelector((state) => state.temoignages)
  const { user } = useSelector((state) => state.auth) // On suppose que user.name existe

  // Recherche si l'utilisateur connecté a déjà un témoignage
  const userTemoignage = temoignages.find(t => t.nom === user?.name)

  return (
    <ProtectedRoute>
      <div className="container my-4">
        <h2 className="text-center mb-4">Témoignages</h2>

        <div
          className="testimonial-list"
          style={{ maxHeight: '500px', overflowY: 'auto', paddingRight: '10px' }}
        >
          {temoignages.length === 0 ? (
            <p className="text-center">Aucun témoignage enregistré.</p>
          ) : (
            temoignages.map((t) => (
              <div
                key={t.id}
                className="card p-3 mb-3 testimonial-item"
                style={{ animation: 'fadeInUp 1s ease forwards' }}
              >
                <h5>{t.nom} 🙋</h5>
                <p>{t.message}</p>
                <p>Note : {'⭐'.repeat(t.note)}</p>
              </div>
            ))
          )}
        </div>

        <div className="text-center mt-3">
          {userTemoignage ? (
            <Link
              href={`/temoignages/formulaire?type=edit&id=${userTemoignage.id}`}
              className="btn btn-secondary"
            >
              Modifier mon témoignage
            </Link>
          ) : (
            <Link
              href="/temoignages/formulaire?type=add"
              className="btn btn-primary"
            >
              Ajouter un témoignage
            </Link>
          )}
        </div>
      </div>
    </ProtectedRoute>
  )
}
