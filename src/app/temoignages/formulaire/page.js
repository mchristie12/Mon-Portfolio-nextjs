'use client'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTemoignage, updateTemoignage } from '../../../redux/slices/temoignagesSlice'
import ProtectedRoute from '../../components/ProtectedRoute'
import { useRouter, useSearchParams } from 'next/navigation'

export default function FormulaireTemoignage() {
  const dispatch = useDispatch()
  const router = useRouter()
  const searchParams = useSearchParams() // Permet de lire les paramètres d'URL

  const type = searchParams.get('type') // 'add' ou 'edit'
  const idParam = searchParams.get('id') // id du témoignage en mode édition

  const { user } = useSelector((state) => state.auth)  // On suppose que user.name existe
  const { temoignages } = useSelector((state) => state.temoignages)

  // Les champs du formulaire pour le témoignage (sans le nom)
  const [message, setMessage] = useState('')
  const [note, setNote] = useState('')
  const [errors, setErrors] = useState({ message: '', note: '' })

  useEffect(() => {
    // En mode "edit", on charge le témoignage existant qui correspond à l'utilisateur connecté
    if (type === 'edit' && idParam) {
      const existing = temoignages.find(t => t.id === Number(idParam))
      if (existing) {
        setMessage(existing.message)
        setNote(existing.note)
      }
    }
  }, [type, idParam, temoignages])

  const handleSubmit = (e) => {
    e.preventDefault()
    let valid = true
    let newErrors = { message: '', note: '' }

    if (!message.trim()) {
      newErrors.message = 'Le message est requis'
      valid = false
    }
    if (!note) {
      newErrors.note = 'La note est requise'
      valid = false
    } else if (Number(note) < 1 || Number(note) > 5) {
      newErrors.note = 'La note doit être entre 1 et 5'
      valid = false
    }
    setErrors(newErrors)

    if (valid) {
      if (type === 'edit' && idParam) {
        dispatch(updateTemoignage({
          id: Number(idParam),
          nom: user.name, // Le nom provient de l'utilisateur connecté
          message,
          note: Number(note),
        }))
      } else {
        const newId = Date.now() // Identifiant unique
        dispatch(addTemoignage({
          id: newId,
          nom: user.name, // Nom automatique de l'utilisateur connecté
          message,
          note: Number(note),
        }))
      }
      router.push('/temoignages')
    }
  }

  return (
    <ProtectedRoute>
      <div className="container my-4">
        <h2 className="text-center mb-4">
          {type === 'edit' ? 'Modifier mon témoignage' : 'Ajouter un témoignage'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Message :</label>
            <textarea
              className="form-control"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {errors.message && <small className="error">{errors.message}</small>}
          </div>
          <div className="mb-3">
            <label>Note (1 à 5) :</label>
            <input
              type="number"
              className="form-control"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              min="1"
              max="5"
            />
            {errors.note && <small className="error">{errors.note}</small>}
          </div>
          <button type="submit" className="btn btn-primary">Enregistrer</button>
        </form>
      </div>
    </ProtectedRoute>
  )
}
