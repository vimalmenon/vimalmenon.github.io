import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Header } from '@components';

import { Container } from './Container.component';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const meta = {
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    url: {
      control: 'select', // Use a select dropdown in the Controls panel
      options: ['/', '/blogs', '/release', '/admin'], // The available options
    },
  },
  component: Header,
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
  title: 'Component/Partials/Header',
} satisfies Meta<typeof Header>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Simple: Story = {
  args: {
    url: '/',
  },
};

type Story = StoryObj<typeof meta>;

export default meta;
