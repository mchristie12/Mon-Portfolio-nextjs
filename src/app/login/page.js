
'use client'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, setError } from '../../redux/slices/authSlice'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = { email: '', password: '' };
    if (!email) errors.email = "L'email est requis";
    if (!password) errors.password = "Le mot de passe est requis";
    setLocalError(errors);
    
    if (email && password) {
      dispatch(login({ email, password }));
      // Petite temporisation pour laisser Redux mettre à jour l'erreur
      setTimeout(() => {
        if (!error) {
          router.push('/');
        }
      }, 100);
    } else {
      dispatch(setError("Veuillez remplir tous les champs"));
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
          {localError.email && <small className="error">{localError.email}</small>}
        </div>
        <div className="mb-3">
          <label>Mot de passe</label>
          <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} />
          {localError.password && <small className="error">{localError.password}</small>}
        </div>
        {error && <div className="error mb-3">{error}</div>}
        <button type="submit" className="btn btn-primary">Se connecter</button>
      </form>
    </div>
  );
}
