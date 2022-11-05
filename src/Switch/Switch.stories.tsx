import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch } from './Switch';

export default {
  title: 'Form/Switch',
  component: Switch,
  argTypes: {},
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  defaultChecked: true,
};
