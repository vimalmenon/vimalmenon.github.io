import { VoidFunction } from '@types';

export interface IUseOthersHelper {
  createUUID: VoidFunction<Promise<void>>;
  uuid: string;
}
