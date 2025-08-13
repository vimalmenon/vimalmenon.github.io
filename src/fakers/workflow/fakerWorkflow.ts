import { faker } from '@faker-js/faker';

import { IWorkflow } from '@types';

export const fakerWorkflow = (): IWorkflow => ({
  complete: true,
  detail: faker.lorem.sentence(),
  executedWorkflows: [],
  id: faker.string.uuid(),
  name: faker.lorem.words(7),
  nodes: {},
});
