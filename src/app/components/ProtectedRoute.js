
'use client'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useSelector((state) => state.auth)
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return <p>Redirection en cours...</p>
  }

  return children
}
