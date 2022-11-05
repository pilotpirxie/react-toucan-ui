import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Range } from './Range';

export default {
  title: 'Form/Range',
  component: Range,
  argTypes: {},
} as ComponentMeta<typeof Range>;

const Template: ComponentStory<typeof Range> = (args) => <Range {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};
