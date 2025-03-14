"use client"

import { useState, createContext, useContext } from "react"
import {  Routes, Route, Navigate } from "react-router"
import HomePage from "./pages/HomePage"
import TestPage from "./pages/TestPage"
import ResultsPage from "./pages/ResultsPage"
import AdminLayout from "./layouts/AdminLayout"
import Dashboard from "./pages/admin/Dashboard"
import QuestionsManager from "./pages/admin/QuestionsManager"
import EditQuestion from "./pages/admin/EditQuestion"
import { TestProvider } from "./contexts/TestContext"

// Create an auth context to share authentication state across components
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = () => {
    console.log("Login function called in App")
    setIsAuthenticated(true)
  }

  const logout = () => {
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      <TestProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/results" element={<ResultsPage />} />

            {/* Admin routes with protected access */}
            <Route path="/admin" element={isAuthenticated ? <AdminLayout /> : <Navigate to="/" replace />}>
              <Route index element={<Dashboard />} />
              <Route path="questions" element={<QuestionsManager />} />
              <Route path="questions/edit/:id" element={<EditQuestion />} />
              <Route path="questions/new" element={<EditQuestion />} />
            </Route>
          </Routes>
      </TestProvider>
    </AuthContext.Provider>
  )
}

export default App

