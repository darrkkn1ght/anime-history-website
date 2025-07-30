'use client';

import React, { useEffect, useState } from 'react';

interface ClientWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const ClientWrapper: React.FC<ClientWrapperProps> = ({ 
  children, 
  fallback = <div className="min-h-screen bg-black" />
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Simple client-side mounting check
    setIsMounted(true);
  }, []);

  // Show fallback during SSR
  if (!isMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}; 