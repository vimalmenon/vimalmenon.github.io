export interface IAppReducer {
  theme: 'dark' | 'light';
  showDrawer: boolean;
}

export type ActionType = 'TOGGLE_THEME' | 'TOGGLE_DRAWER';

export interface IAppAction {
  type: ActionType;
  payload: string;
}

export interface IAppContext extends IAppReducer {
  toggleTheme: () => void;
  toggleDrawer: () => void;
}

export type DispatchType = ActionDispatch<[action: IAppAction]>;
