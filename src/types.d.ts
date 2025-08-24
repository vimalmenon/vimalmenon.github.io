// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export type AnyType = any;

export interface IReactChildren {
  children: React.ReactNode;
}

export type ThemeMode = 'light' | 'dark' | 'system';

export type ColorTheme = 'default' | 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'pink';

export interface ThemeConfig {
  colorTheme: ColorTheme;
  mode: ThemeMode;
}

export interface IColorThemeItem {
  color: string;
  value: ColorTheme;
  description: string;
  name: string;
}

export interface IColorModeItem {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  value: ThemeMode;
  description: string;
  name: string;
}

export interface ILocalStorageKey {
  colorTheme: ColorTheme;
  mode: ThemeMode;
}

export interface INavigationItemSlim {
  name: string;
  url: string;
  // Icon?: AnyType;
}

export interface INavigationItem extends INavigationItemSlim {
  segments: string[];
  breadcrumb: INavigationItemSlim[];
  exact: boolean;
}
