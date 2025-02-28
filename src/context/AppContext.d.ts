export interface IAppReducer {
  theme: 'dark' | 'light';
}

export type ActionType = 'TOGGLE_THEME';

export interface IAppAction {
  type: ActionType;
  payload: string;
}

export interface IAppContext extends IAppReducer {
  toggleTheme: () => void;
}

export type DispatchType = ActionDispatch<[action: IAppAction]>;
