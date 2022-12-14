import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NumericInput } from './NumericInput';

export default {
  title: 'Form/NumericInput',
  component: NumericInput,
  argTypes: {},
} as ComponentMeta<typeof NumericInput>;

const Template: ComponentStory<typeof NumericInput> = (args) => <NumericInput {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'Number',
};
export const focusedPlaceholder = Template.bind({});
focusedPlaceholder.args = {
  placeholder: 'Number',
  focusedPlaceholder: 'I can be anything you want...',
};
export const fullWidth = Template.bind({});
fullWidth.args = {
  placeholder: 'Number',
  focusedPlaceholder: 'Thou shall write texts longer than humanity had ever imagined...',
  fullWidth: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'This input is disabled.',
  disabled: true,
};
