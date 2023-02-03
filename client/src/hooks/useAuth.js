import React, { useEffect, useState } from 'react'

function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const userString = localStorage.getItem('user')
    setUser(JSON.parse(userString))
    setLoading(false)
  }, [])


  return [user, loading]
}

export default useAuth
