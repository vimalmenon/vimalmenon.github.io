export interface IPanel {
  onCreateNode: () => void;
  onExecute: () => void;
  complete: boolean;
}
