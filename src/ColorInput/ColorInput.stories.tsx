import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ColorInput } from './ColorInput';

export default {
  title: 'Form/ColorInput',
  component: ColorInput,
  argTypes: {},
} as ComponentMeta<typeof ColorInput>;

const Template: ComponentStory<typeof ColorInput> = (args) => <ColorInput {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'Color',
};
export const focusedPlaceholder = Template.bind({});
focusedPlaceholder.args = {
  placeholder: 'Color',
  focusedPlaceholder: 'I can be anything you want...',
};
export const fullWidth = Template.bind({});
fullWidth.args = {
  placeholder: 'Color',
  focusedPlaceholder: 'Thou shall write texts longer than humanity had ever imagined...',
  fullWidth: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'This input is disabled.',
  disabled: true,
};
