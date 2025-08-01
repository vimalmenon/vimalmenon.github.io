const topics = [
  {
    link: '',
    name: '',
    tags: ['test', 'command'],
    text: `
    
    `,
    title: 'This is all Unix command',
    type: 'Unix Command',
  },
];

const commands = {
  link: 'command',
  name: '',
  title: 'This is Commands',
  topics,
};

const vimCommand = {
  link: 'vim',
  name: '',
  title: 'This is Vim Command',
  topics: [],
};

export const blogs = [commands, vimCommand];
