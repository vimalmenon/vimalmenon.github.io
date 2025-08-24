import '../app/globals.css';
import { IReactChildren } from '../types';

export const Container: React.FC<IReactChildren> = ({ children }) => (
  <div className="container mx-auto px-4">{children}</div>
);
