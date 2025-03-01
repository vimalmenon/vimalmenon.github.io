export interface IColorItem {
  color: string;
  name: string;
  onClick: () => void;
  selectedColor?: string;
  main?: string;
  light?: string;
  dark?: string;
}
