import { Icons } from '@data';
import { ColorTheme, IColorModeItem, IColorThemeItem } from '@types';

export const colorModeOptions: IColorModeItem[] = [
  { description: 'Light mode', Icon: Icons.Sun, name: 'Light', value: 'light' },
  { description: 'Dark mode', Icon: Icons.Moon, name: 'Dark', value: 'dark' },
  {
    description: 'Follow system preference',
    Icon: Icons.Monitor,
    name: 'System',
    value: 'system',
  },
];

const defaultValue: IColorThemeItem = {
  color: 'bg-slate-500',
  description: 'Classic neutral theme',
  name: 'Default',
  value: 'default',
};

const blueValue: IColorThemeItem = {
  color: 'bg-blue-500',
  description: 'Professional blue theme',
  name: 'Blue',
  value: 'blue',
};

const greenValue: IColorThemeItem = {
  color: 'bg-green-500',
  description: 'Natural green theme',
  name: 'Green',
  value: 'green',
};

const purpleValue: IColorThemeItem = {
  color: 'bg-purple-500',
  description: 'Creative purple theme',
  name: 'Purple',
  value: 'purple',
};

const orangeValue: IColorThemeItem = {
  color: 'bg-orange-500',
  description: 'Energetic orange theme',
  name: 'Orange',
  value: 'orange',
};

const redValue: IColorThemeItem = {
  color: 'bg-red-500',
  description: 'Bold red theme',
  name: 'Red',
  value: 'red',
};

const pinkValue: IColorThemeItem = {
  color: 'bg-pink-500',
  description: 'Vibrant pink theme',
  name: 'Pink',
  value: 'pink',
};

export const colorThemeOptions: IColorThemeItem[] = [
  defaultValue,
  blueValue,
  greenValue,
  purpleValue,
  orangeValue,
  redValue,
  pinkValue,
];

export const colorThemeMap: Record<ColorTheme, IColorThemeItem> = {
  blue: blueValue,
  default: defaultValue,
  green: greenValue,
  orange: orangeValue,
  pink: pinkValue,
  purple: purpleValue,
  red: redValue,
};
