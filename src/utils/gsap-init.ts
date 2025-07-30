// Simplified GSAP initialization utility for Next.js App Router
let gsapInitialized = false;
let gsapInstance: any = null;
let scrollTriggerInstance: any = null;

export const initializeGSAP = async () => {
  // Check if we're in a browser environment and if GSAP is already initialized
  if (typeof window === 'undefined' || gsapInitialized) {
    return;
  }

  // Simple initialization without complex async operations
  try {
    // Dynamic import to ensure GSAP is only loaded on the client
    const gsapModule = await import('gsap');
    const scrollTriggerModule = await import('gsap/ScrollTrigger');
    
    gsapInstance = gsapModule.gsap;
    scrollTriggerInstance = scrollTriggerModule.ScrollTrigger;
    
    if (gsapInstance && scrollTriggerInstance) {
      gsapInstance.registerPlugin(scrollTriggerInstance);
      gsapInitialized = true;
    }
  } catch (error) {
    console.warn('GSAP initialization failed:', error);
  }
};

export const isGSAPInitialized = () => gsapInitialized;

export const getGSAP = () => gsapInstance;
export const getScrollTrigger = () => scrollTriggerInstance; 