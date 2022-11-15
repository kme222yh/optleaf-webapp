import React from 'react';
import { AuthProvider } from '../src/providers/auth';
import { QueryClientProvider, QueryClient } from 'react-query';
import { MemoryRouter } from 'react-router-dom';

const queryClient = new QueryClient();

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
};

export const decorators = [
    (story) => (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <MemoryRouter>{story()}</MemoryRouter>
            </AuthProvider>
        </QueryClientProvider>
    )
];
