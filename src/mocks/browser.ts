/* eslint-disable import/no-extraneous-dependencies */

import { setupWorker } from 'msw';
import { handlers } from './handlers';

// This configures a Service Worker with the given request handlers.
const worker = setupWorker(...handlers);

export async function startMockWorker() {
    await worker.start({ onUnhandledRequest: 'bypass' });
}
