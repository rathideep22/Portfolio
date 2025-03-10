"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }: any) {
  const [mounted, setMounted] = React.useState(false);

  // Ensure the component is mounted on the client
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR, render nothing to avoid hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
} 