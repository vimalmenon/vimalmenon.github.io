import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Button } from '@components';

import { Container } from './Container.component';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const meta = {
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  component: Button,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
  //   parameters: {
  //     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  //     layout: 'fullscreen',
  //   },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'Component/UI/Button',
} satisfies Meta<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Simple: Story = {
  args: {
    children: 'Button',
  },
};
type Story = StoryObj<typeof meta>;

export default meta;
