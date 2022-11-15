import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    buttonStyle: {
      options: ['standard', 'outlined', 'link'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  color: 'primary',
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
  color: 'primary',
  children: 'Button',
  buttonStyle: 'outlined',
};

export const Link = Template.bind({});
Link.args = {
  color: 'primary',
  children: 'Button',
  buttonStyle: 'link',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  disabled: true,
};
