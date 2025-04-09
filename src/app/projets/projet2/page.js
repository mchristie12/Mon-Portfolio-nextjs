

'use client'
import ProtectedRoute from '../../components/ProtectedRoute'
import Image from 'next/image'
import Link from 'next/link'

export default function Projet2() {
  return (
    <ProtectedRoute>
      <div className="container my-2">
        <div className="card p-4 project-card">
          {/* Titre */}
          <h2 className="mb-3 text-center">
            Projet 2 : Boutique en ligne de vêtements (Fullstack)
          </h2>
          {/* Image */}
          <Image
            src="/images/projet2-screenshot.jpg"
            alt="Capture d'écran du projet 2"
            width={600}
            height={300}
            className="img-fluid rounded mx-auto d-block"
          />
          {/* Description centrée */}
          <p className="text-center mt-3">
            Projet collaboratif combinant un backend solide en Node.js/Express et un frontend moderne avec Vue.js, permettant la gestion complète d’une boutique en ligne : utilisateurs, produits, commandes, paiements et avis clients. Ce projet a été conçu pour reproduire un environnement e-commerce réel, avec une structure MVC et une architecture claire.
          </p>
          {/* Layout en deux colonnes alignées horizontalement */}
          <div className="row justify-content-center mt-4">
            {/* Colonne Fonctionnalités */}
            <div className="col-md-5">
              <h4>Fonctionnalités principales :</h4>
              <ul>
                <li>🔐 Authentification sécurisée</li>
                <li>📦 Gestion du catalogue (produits, catégories)</li>
                <li>🛒 Panier d’achats, paiements</li>
                <li>💬 Avis clients &amp; 🔔 notifications</li>
                <li>📱 Interface responsive avec Bootstrap</li>
                <li>🔄 Communication front-back avec Axios</li>
                <li>🧠 Gestion d’état via Pinia</li>
              </ul>
            </div>
            {/* Colonne Technologies avec sous-colonnes Frontend et Backend */}
            <div className="col-md-5">
              <h4>Technologies utilisées :</h4>
              <div className="row">
                <div className="col-md-6">
                  <h5>Frontend :</h5>
                  <ul className="list-unstyled">
                    <li>🟩 Vue.js (Composition API)</li>
                    <li>⚡ Vite</li>
                    <li>🎨 Bootstrap</li>
                    <li>🍍 Pinia</li>
                    <li>🔄 Axios</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h5>Backend :</h5>
                  <ul className="list-unstyled">
                    <li>🌐 Node.js</li>
                    <li>🚂 Express</li>
                    <li>🧩 Sequelize</li>
                    <li>🐬 MySQL</li>
                    <li>🔑 JWT</li>
                  </ul>
                </div>
              </div>
              <p>
                <Link
                  href="https://github.com/Jugurta18/UA2-ProjetServeurWeb"
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
