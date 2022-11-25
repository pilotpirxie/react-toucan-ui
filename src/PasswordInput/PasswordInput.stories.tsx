import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PasswordInput } from './PasswordInput';

export default {
  title: 'Form/PasswordInput',
  component: PasswordInput,
  argTypes: {},
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = (args) => <PasswordInput {...args} />;

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
