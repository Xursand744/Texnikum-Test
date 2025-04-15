"use client"

import { createContext, useState, useContext, useEffect } from "react"

// Create user context
const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [testHistory, setTestHistory] = useState([])

  // Load user data from localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    const storedTestHistory = localStorage.getItem("testHistory")

    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }

    if (storedTestHistory) {
      setTestHistory(JSON.parse(storedTestHistory))
    }

    setIsLoading(false)
  }, [])

  // Save user data to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user))
    }
  }, [user])

  // Save test history to localStorage whenever it changes
  useEffect(() => {
    if (testHistory.length > 0) {
      localStorage.setItem("testHistory", JSON.stringify(testHistory))
    }
  }, [testHistory])

  const register = (userData) => {
    // In a real app, you would send this to a server
    // For now, we'll just store it locally
    setUser(userData)
    return true
  }

  const login = (email, password) => {
    // In a real app, you would validate against a server
    // For now, we'll check against the stored user
    const storedUser = JSON.parse(localStorage.getItem("user"))

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUser(storedUser)
      return true
    }

    return false
  }

  const logout = () => {
    setUser(null)
    // Don't clear test history on logout
  }

  const saveTestResult = (result) => {
    const newResult = {
      ...result,
      date: new Date().toISOString(),
      id: Date.now(),
    }

    const updatedHistory = [...testHistory, newResult]
    setTestHistory(updatedHistory)
    localStorage.setItem("testHistory", JSON.stringify(updatedHistory))
  }

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
        register,
        login,
        logout,
        testHistory,
        saveTestResult,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
