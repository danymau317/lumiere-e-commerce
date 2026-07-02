import type { ActionThemeType } from "../types/themeTypes";

export function themeToggle(): ActionThemeType {
  return { type: "theme/toggle" };
}
