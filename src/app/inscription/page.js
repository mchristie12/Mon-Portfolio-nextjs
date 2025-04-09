
'use client'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register, setError } from '../../redux/slices/authSlice'
import { useRouter } from 'next/navigation'

export default function InscriptionPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { error } = useSelector((state) => state.auth);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localError, setLocalError] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = { name: '', email: '', password: '', confirmPassword: '' };
    if (!name) errors.name = 'Le nom est requis';
    if (!email) errors.email = "L'email est requis";
    if (!password) errors.password = 'Le mot de passe est requis';
    if (password !== confirmPassword) errors.confirmPassword = 'Les mots de passe ne correspondent pas';
    setLocalError(errors);
    
    if (name && email && password && (password === confirmPassword)) {
      dispatch(register({ name, email, password }));
      router.push('/');
    } else {
      dispatch(setError('Veuillez corriger les erreurs'));
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nom</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {localError.name && <small className="error">{localError.name}</small>}
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {localError.email && <small className="error">{localError.email}</small>}
        </div>
        <div className="mb-3">
          <label>Mot de passe</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {localError.password && <small className="error">{localError.password}</small>}
        </div>
        <div className="mb-3">
          <label>Confirmer le mot de passe</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {localError.confirmPassword && <small className="error">{localError.confirmPassword}</small>}
        </div>
        {error && <div className="error mb-3">{error}</div>}
        <button type="submit" className="btn btn-primary">S'inscrire</button>
      </form>
    </div>
  );
}
