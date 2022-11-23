import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Password } from './Password';

export default {
  title: 'Form/Password',
  component: Password,
  argTypes: {},
} as ComponentMeta<typeof Password>;

const Template: ComponentStory<typeof Password> = (args) => <Password {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'Password',
};
export const focusedPlaceholder = Template.bind({});
focusedPlaceholder.args = {
  placeholder: 'Password',
  focusedPlaceholder: 'I can be anything you want...',
};
export const fullWidth = Template.bind({});
fullWidth.args = {
  placeholder: 'Password',
  focusedPlaceholder: 'Thou shall write texts longer than humanity had ever imagined...',
  fullWidth: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'This input is disabled.',
  disabled: true,
};
