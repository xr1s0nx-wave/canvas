import { Suspense } from 'react';

interface LazyWrapperProps {
  children: React.ReactNode;
}

export function LazyWrapper({ children }: LazyWrapperProps) {
  return (
    <Suspense fallback={null}>
      {children}
    </Suspense>
  );
}
