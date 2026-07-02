import type { ActionThemeType, ThemeType } from "../types/themeTypes";

const initialState: ThemeType = {
  darkMode: false,
};

export function themeReducer(
  state: ThemeType = initialState,
  action: ActionThemeType,
) {
  switch (action.type) {
    case "theme/toggle":
      return { ...state, darkMode: !state.darkMode };

    default:
      return state;
  }
}
