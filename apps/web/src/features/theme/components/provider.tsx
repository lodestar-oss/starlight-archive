import type { ReactNode } from "react";

import { ScriptOnce } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { UserThemeSchema, type UserTheme } from "@/features/theme/schemas";

import {
  setupPreferredThemeListener,
  getStoredUserTheme,
  handleThemeChange,
  getSystemTheme,
  setStoredTheme,
  themeScript,
} from "@/features/theme/helpers";
import { ThemeContext } from "@/features/theme/context";

function ThemeProvider({ children }: { children: ReactNode }) {
  const [userTheme, setUserTheme] = useState<UserTheme>(getStoredUserTheme);

  useEffect(() => {
    if (userTheme !== "system") {
      return;
    }
    return setupPreferredThemeListener();
  }, [userTheme]);

  const appTheme = userTheme === "system" ? getSystemTheme() : userTheme;

  const setTheme = (newUserTheme: UserTheme) => {
    const validatedTheme = UserThemeSchema.parse(newUserTheme);
    setUserTheme(validatedTheme);
    setStoredTheme(validatedTheme);
    handleThemeChange(validatedTheme);
  };

  return (
    <ThemeContext value={{ userTheme, appTheme, setTheme }}>
      <ScriptOnce children={themeScript} />
      {children}
    </ThemeContext>
  );
}

export { ThemeProvider };
