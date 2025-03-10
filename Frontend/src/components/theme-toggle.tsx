"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeToggle() {
  // Since we're using a forced dark theme, make this a placeholder button
  // that doesn't actually toggle themes
  
  return (
    <button
      className="rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-emerald-500"
      aria-label="Theme toggle (dark mode only)"
    >
      <FiMoon className="h-5 w-5 text-emerald-400" />
    </button>
  );
} 