
'use client'
import ProtectedRoute from '../../components/ProtectedRoute'
import Image from 'next/image'
import Link from 'next/link'

export default function Projet1() {
  return (
    <ProtectedRoute>
      <div className="container my-1">
        <div className="card p-4 project-card">
          {/* Titre */}
          <h2 className="mb-3 text-center">
            Projet 1 : Application de gestion d’événements scolaires (Fullstack)
          </h2>
          {/* Image */}
          <Image
            src="/images/projet1-screenshot.jpg"
            alt="Capture d'écran du projet 1"
            width={600}
            height={300}
            className="img-fluid rounded mx-auto d-block"
          />
          {/* Description centrée */}
          <p className="text-center mt-2">
            Application web développée avec Node.js, Express et MySQL pour le backend, et Next.js pour le frontend. Elle permet à un établissement scolaire de gérer ses événements internes tels que des réunions, conférences, journées culturelles ou activités étudiantes.L’objectif est de permettre aux administrateurs de créer et publier des événements, et aux étudiants de les consulter et s’y inscrire facilement.
            </p>
          {/* Layout en deux colonnes alignées horizontalement */}
          <div className="row justify-content-center mt-4">
            {/* Colonne Fonctionnalités */}
            <div className="col-md-5">
              <h4>Fonctionnalités principales :</h4>
              <ul>
                 <li>🔑 Authentification sécurisée avec JWT</li>
                <li>🧾 Création, lecture, modification et suppression (CRUD) des événements</li>
                <li>👥 Gestion des utilisateurs avec rôles (admin / utilisateur)</li>
                <li>🔍 Recherche et affichage filtré des événements</li>
                <li>📅 Affichage des événements sous forme de liste</li>
                <li>📡 Communication client-serveur avec Axios</li>
                <li>📱 Interface responsive et moderne avec Tailwind CSS</li>
              </ul>
            </div>
            {/* Colonne Technologies */}
            <div className="col-md-5">
              <h4>Technologies utilisées :</h4>
              <ul className="list-unstyled">
                <li>🟦 Next.js</li>
                <li>⚛️ React</li>
                <li>🌐 Node.js</li>
                <li>🚂 Express</li>
                <li>🐬 Mysql</li>
                <li>💨 Tailwind CSS</li>
                <li>Sequelize (ORM) pour interagir avec MySQL</li>
              </ul>
              <p>
                <Link
                  href="https://github.com/mchristie12/frontend-gestion-evenements-scolaires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-underline"
                >
                  Voir le code sur GitHub
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}


