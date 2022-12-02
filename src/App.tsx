import { AppProvider } from '@/providers/app';
import { AppRoutes } from '@/routes';

import { ScreenTransitionView } from '@/views/ScreenTransitionView';

function App() {
    return (
        <AppProvider>
            <AppRoutes />
            <ScreenTransitionView />
        </AppProvider>
    );
}

export default App;
