import { useEffect, useState, useCallback } from 'react';
import styles from './styles.module.scss';
import { useNavigation, useLocation } from 'react-router-dom';
import { ClientOnly } from '@/shared/ui';

function PageProgressBarContent() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [loadingResources, setLoadingResources] = useState(0);
  const [isCompleting, setIsCompleting] = useState(false);

  const navigation = useNavigation();
  const location = useLocation();

  // Single function to complete the progress
  const completeProgress = useCallback(() => {
    if (isCompleting) return;
    setIsCompleting(true);
    setProgress(100);
    setTimeout(() => {
      setIsVisible(false);
      setProgress(0);
      setLoadingResources(0);
      setIsCompleting(false);
    }, 500);
  }, [isCompleting]);

  useEffect(() => {
    if (navigation.state === 'loading') {
      setIsVisible(true);
      setProgress(10);
      setIsCompleting(false);
    } else if (navigation.state === 'idle' && isVisible && !isCompleting) {
      if (loadingResources === 0) {
        completeProgress();
      }
    }
  }, [navigation.state, isVisible, loadingResources, isCompleting, completeProgress]);

  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a[href]') as HTMLAnchorElement;
      
      if (link && link.href && !link.href.startsWith('mailto:') && !link.href.startsWith('tel:')) {
        const currentOrigin = window.location.origin;
        if (link.href.startsWith(currentOrigin)) {
          setIsVisible(true);
          setProgress(10);
        }
      }
    };

    const handlePopState = () => {
      setIsVisible(true);
      setProgress(10);
    };

    document.addEventListener('click', handleLinkClick);
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Track location changes (for programmatic navigation)
  useEffect(() => {
    if (isVisible && !isCompleting) {
      // Location changed, but wait for resources to complete
      if (loadingResources === 0) {
        completeProgress();
      }
    }
  }, [location.pathname, location.search, isVisible, loadingResources, isCompleting, completeProgress]);

  useEffect(() => {
    // Track resource loading
    const handleLoadStart = () => {
      setLoadingResources(prev => prev + 1);
      if (isVisible && progress < 80) {
        setProgress(prev => Math.min(prev + 10, 80));
      }
    };

    const handleLoadEnd = () => {
      setLoadingResources(prev => {
        const newCount = Math.max(prev - 1, 0);
        if (newCount === 0 && isVisible && !isCompleting) {
          // All resources loaded, complete the progress
          completeProgress();
        } else if (isVisible && progress < 90) {
          setProgress(prev => Math.min(prev + 5, 90));
        }
        return newCount;
      });
    };

    window.addEventListener('loadstart', handleLoadStart);
    window.addEventListener('loadend', handleLoadEnd);
    
    const originalFetch = window.fetch;
    window.fetch = async(...args) => {
      handleLoadStart();
      try {
        const response = await originalFetch(...args);
        handleLoadEnd();
        return response;
      } catch (error) {
        handleLoadEnd();
        throw error;
      }
    };

    return () => {
      window.removeEventListener('loadstart', handleLoadStart);
      window.removeEventListener('loadend', handleLoadEnd);
      window.fetch = originalFetch;
    };
  }, [isVisible, progress, isCompleting, completeProgress]);

  useEffect(() => {
    const updateProgress = () => {
      if (!isVisible) return;
      
      switch (document.readyState) {
        case 'loading':
          if (progress < 20) setProgress(20);
          break;
        case 'interactive':
          if (progress < 60) setProgress(60);
          break;
        case 'complete':
          // Document is complete, but wait for all resources
          if (loadingResources === 0 && progress < 100 && !isCompleting) {
            completeProgress();
          }
          break;
      }
    };

    updateProgress();
    document.addEventListener('readystatechange', updateProgress);

    return () => {
      document.removeEventListener('readystatechange', updateProgress);
    };
  }, [isVisible, loadingResources, progress, isCompleting, completeProgress]);

  if (!isVisible) return null;

  return (
    <div className={styles.pageProgressBar}>
      <span className={styles.progress} style={{ width: `${progress}%` }} />
    </div>
  );
}

export function PageProgressBar() {
  return (
    <ClientOnly>
      <PageProgressBarContent />
    </ClientOnly>
  );
}
