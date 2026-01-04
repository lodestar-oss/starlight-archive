import type { ReactNode } from "react";

import { ThemeProvider } from "@/features/theme/components/provider";

function AppProviders({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export { AppProviders };
