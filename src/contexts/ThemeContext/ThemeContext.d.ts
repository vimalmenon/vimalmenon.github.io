import { ColorTheme, ReactSetState, ThemeConfig, ThemeMode } from '@types';

export interface IContext {
  colorTheme: ColorTheme;
  mode: ThemeMode;
  actualMode: ThemeMode;
  setColorTheme: (theme: ColorTheme) => void;
  setMode: (mode: ThemeMode) => void;
  setTheme: (config: ThemeConfig) => void;
  mounted: boolean;
  isDrawerOpen: boolean;
  setIsDrawerOpen: ReactSetState<boolean>;
}
