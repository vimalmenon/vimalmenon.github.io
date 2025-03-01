export const addImportant = <T>(value: T): T => {
  return (value + ' !important') as T;
};
