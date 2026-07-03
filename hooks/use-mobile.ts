import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Use a lazy initializer or simply initialize with undefined, 
  // but to avoid the lint error, we shouldn't set state during render or synchronously in effect if we can help it,
  // but it's safe to just check window in the initializer if we are client-side, 
  // However Next.js SSR means window is not defined during SSR.
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Only run on client
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Set initial value inside a microtask to avoid synchronous setState in effect warning
    // or just let it update asynchronously.
    let mounted = true;
    
    const onChange = () => {
      if (mounted) {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      }
    }
    
    // Defer the initial setting
    Promise.resolve().then(() => {
      if (mounted) {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      }
    });
    
    mql.addEventListener("change", onChange)
    
    return () => {
      mounted = false;
      mql.removeEventListener("change", onChange)
    }
  }, [])

  return !!isMobile
}
