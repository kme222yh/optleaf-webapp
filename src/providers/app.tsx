import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from '@/features/auth'

type AppProviderProps = {
  children: React.ReactNode
}

const queryClient = new QueryClient()

export function AppProvider({ children }: AppProviderProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <Router>{children}</Router>
            </AuthProvider>
        </QueryClientProvider>
    )
}
