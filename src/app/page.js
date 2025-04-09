
'use client'
import ProtectedRoute from './components/ProtectedRoute'
import Link from 'next/link'

export default function HomePage() {
  return (
    <ProtectedRoute>
      {/* Section "hero" */}
      <div className="hero text-center">
        <div className="container">
          <img
            src="/images/profile.jpg"
            alt="Photo de profil"
            className="rounded-circle profile-pic"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <h1 className="display-5">Bienvenue sur mon portfolio</h1>
          <p className="lead">
            Je suis <strong>Christie Mosseca Louis</strong>, développeuse web et logiciel spécialisée en JavaScript, React, Next.js et développement backend.
          </p>
        </div>
      </div>

      {/* Section "À propos" */}
      <div className="container about-section">
        <div className="card shadow-sm about-card">
          <p>
            Actuellement en fin de formation en programmation informatique au Collège La Cité à Ottawa, je suis passionnée par le monde du numérique.
            Je possède une solide base en JavaScript, React, Next.js, Redux, HTML, CSS, Vue.js, Node.js, Express, C#, ainsi qu’en développement mobile avec Swift. J’ai également acquis de l’expérience avec des technologies telles que MySQL, Sequelize, TypeScript, Axios et JWT dans le cadre de projets fullstack. Ma formation m’a permis de développer une approche structurée du développement logiciel, basée sur des pratiques comme l’architecture MVC et la gestion des routes sécurisées. </p>
          <p>
            En parallèle, je suis à l’aise avec les outils de gestion de projet, la communication interpersonnelle et le travail en équipe. Ma maîtrise de plusieurs langues (français, espagnol, créole et anglais) me permet d’évoluer dans des environnements multiculturels avec aisance. J’accorde une grande importance à l’apprentissage continu, à l’organisation et à la qualité du code que je produis. </p>
          <p>Ce portfolio reflète non seulement mes compétences techniques, mais aussi ma capacité à concevoir des solutions fonctionnelles, esthétiques et centrées sur l’utilisateur. Je suis à la recherche de nouvelles opportunités professionnelles dans lesquelles je pourrai continuer à apprendre, contribuer, et m’épanouir pleinement dans le monde du développement web et logiciel.</p>
          <p>Merci pour votre visite !</p>
        </div>
      </div>

      {/* Section "Mes Projets" */}
      <div className="container projects-section text-center">
        <p>Découvrez mes projets et compétences ci-dessous.</p>
        <Link href="/projets/projet1" className="btn btn-custom mt-1">
          <u>Voir mes projets</u>
        </Link>
      </div>
    </ProtectedRoute>
  )
}
