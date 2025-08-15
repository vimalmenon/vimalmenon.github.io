import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Icon } from '@component';
import { Icons } from '@data';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const meta = {
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  component: Icon,
  //   parameters: {
  //     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  //     layout: 'fullscreen',
  //   },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'Component/Icons',
  decorators: [(Story) => {
    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        tjis
        <Story />
      </div>
    );
  }]
} satisfies Meta<typeof Icon>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Complete: Story = {
  args: {
    icon: <Icons.Add />,
    toolTip: 'Add',
  },
};
type Story = StoryObj<typeof meta>;

export default meta;
