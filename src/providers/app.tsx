import * as React from 'react'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom'
// import { AuthProvider } from '@/lib/auth';

type AppProviderProps = {
  children: React.ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
    return (
    // <AuthProvider>
        <Router>{children}</Router>
    // </AuthProvider>
    )
}
