import React from 'react';

import { Glyph } from './Glyph';
import { glyphs } from './data';



export default {
  title: 'Components/Glyph',
  component: Glyph,

  argTypes: {
    type: {
      options: glyphs,
      defaultValue: '\u2661',
      control: { type: 'select' },
    }
  }
};


const Template = (args) => <Glyph {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  type: '\u2661',
};


