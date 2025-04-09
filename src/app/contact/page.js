
'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    let formErrors = {}

    if (!name.trim()) {
      formErrors.name = "Veuillez renseigner votre nom."
    }
    if (!email.trim()) {
      formErrors.email = "Veuillez renseigner votre email."
    }
    if (!subject.trim()) {
      formErrors.subject = "Veuillez renseigner le sujet."
    }
    if (!message.trim()) {
      formErrors.message = "Veuillez renseigner votre message."
    }

    setErrors(formErrors)

    if (Object.keys(formErrors).length === 0) {
      // Vous pouvez intégrer ici la logique pour envoyer le formulaire via une API,
      // par exemple avec fetch ou axios.
      setSubmitted(true)
    }
  }

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Contact</h2>
      {submitted ? (
        <p className="text-center">
          Merci pour votre message, nous vous contacterons bientôt.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nom :</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <small className="text-danger">{errors.name}</small>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Email :</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Sujet :</label>
            <input
              type="text"
              className="form-control"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            {errors.subject && (
              <small className="text-danger">{errors.subject}</small>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Message :</label>
            <textarea
              className="form-control"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {errors.message && (
              <small className="text-danger">{errors.message}</small>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        </form>
      )}
    </div>
  )
}
