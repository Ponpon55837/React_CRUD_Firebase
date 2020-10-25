import React, { useContext, useState, useEffect } from 'react'
import { projectAuth } from "./firebase/Config"

const AuthContext = React.createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthComponent = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()

  const value = { currentUser }

  useEffect(() => {
    const unsubcribe = projectAuth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
    return unsubcribe
  }, [])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
