import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Form/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  color: 'primary',
  children: 'Button',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: 'extraLarge',
  children: 'Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
  color: 'primary',
  children: 'Button',
  style: 'outlined',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  disabled: true,
};
