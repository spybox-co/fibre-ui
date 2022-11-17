import React from 'react';

import { Icon } from './Icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Icon',
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      options: [
        'ArrowRight',
        'Plus',
        'Copy',
        'RotateLeft',
        'Cross',
        'Search',
        'Check',
        'EyeOpen',
        'Circle',
      ],
      control: { type: 'select' },
    },
    size: {
      options: [
        16,
        20,
        24,
        32,
        40,
        48,
      ],
      control: { type: 'select' },
    },
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  type: 'Circle',
};
