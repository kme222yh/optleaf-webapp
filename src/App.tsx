import { AppProvider } from '@/providers/app';
import { AppRoutes } from '@/routes';

import { ScreenTransitionView } from '@/views/ScreenTransitionView';
import { Messanger } from './features/dashboard/organisms/Messanger';

function App() {
    return (
        <AppProvider>
            <AppRoutes />
            <ScreenTransitionView />
            <Messanger />
        </AppProvider>
    );
}

export default App;
