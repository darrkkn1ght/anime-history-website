'use client';

import React, { useEffect } from 'react';
import { setAppRouterReady } from '@/utils/app-router-utils';

interface AppRouterProviderProps {
  children: React.ReactNode;
}

export const AppRouterProvider: React.FC<AppRouterProviderProps> = ({ children }) => {
  useEffect(() => {
    // Mark the app router as ready immediately after mount
    setAppRouterReady();
  }, []);

  return <>{children}</>;
}; 