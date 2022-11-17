import React from 'react';

import { Button } from './Button';
// import { IconButton } from './IconButton';

// @See IBM inspiration
// https://github.com/carbon-design-system/carbon/blob/main/packages/react/src/components/Button/Button.stories.js

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

  argTypes: {
    type: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'ghost',
        'danger',
        'warning',
        // 'danger--ghost',
      ],
      control: { type: 'select' },
    },
    renderIcon: {
      name: 'with icon',
      control: { type: 'bool' },
    },
    mode: {
      options: [
        'light',
        'dark',
      ],
      control: { type: 'select' },
    }
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;



// export const Default = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Default.args = {
//   type: 'ghost',
// };


export const Primary = Template.bind({});

Primary.args = {
  type: 'primary',
  label: 'Button'
};

export const Secondary = Template.bind({});

Secondary.args = {
  type: 'secondary',
  label: 'Button'
};


export const Ghost = (args) => {
  return (
    <>
      <Button type="ghost" {...args}>
        Ghost Button
      </Button>
      <Button type="ghost" renderIcon='ArrowRight' {...args}>
        Ghost Button
      </Button>
      <Button type="ghost" renderIcon='ArrowRight' hasOnlyIcon {...args}>
        Ghost Button
      </Button>
    </>
  );
};

export const IconButton = (args) => {
  return (
    <>
      <Button type="primary" renderIcon="Plus" hasOnlyIcon {...args} />
      <Button type="secondary" renderIcon="Plus" hasOnlyIcon {...args} />
      <Button type="ghost" renderIcon="Plus" hasOnlyIcon {...args} />
    </>
  )
}