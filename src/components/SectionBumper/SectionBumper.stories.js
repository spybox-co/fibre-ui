import React from 'react';

import { SectionBumper } from './SectionBumper';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/SectionBumper',
  component: SectionBumper,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

  argTypes: {
    type: {
      options: [
        'primary',
        'default'
      ],
      control: { type: 'select' },
      renderIcon: {
        control: false,
      },
    },
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SectionBumper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};
export const Default = Template.bind({});
Default.args = {
  type: 'default',
};