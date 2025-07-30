// Simplified utility to check if Next.js App Router is ready
let appRouterReady = false;

export const setAppRouterReady = () => {
  appRouterReady = true;
};

export const isAppRouterReady = () => {
  return appRouterReady;
};

export const waitForAppRouter = (): Promise<void> => {
  return new Promise((resolve) => {
    if (appRouterReady) {
      resolve();
      return;
    }

    // Simple timeout-based approach instead of polling
    setTimeout(() => {
      appRouterReady = true;
      resolve();
    }, 100);
  });
}; 