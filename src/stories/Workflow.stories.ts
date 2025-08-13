import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fakerWorkflow } from '../fakers';
import { WorkflowView } from '../page/AdminWorkflowId/Workflow/WorkflowView';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const meta: Meta = {
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  component: WorkflowView,
  //   parameters: {
  //     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  //     layout: 'fullscreen',
  //   },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'Workflow/WorkflowView',
} satisfies Meta<typeof WorkflowView>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Complete: StoryObj<typeof meta> = {
  args: {
    data: fakerWorkflow(),
  },
};

export default meta;
