import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from './Text';

export default {
  title: 'Form/Text',
  component: Text,
  argTypes: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'Text',
};
export const focusedPlaceholder = Template.bind({});
focusedPlaceholder.args = {
  placeholder: 'Text',
  focusedPlaceholder: 'I can be anything you want...',
};
export const fullWidth = Template.bind({});
fullWidth.args = {
  placeholder: 'Text',
  focusedPlaceholder: 'Thou shall write texts longer than humanity had ever imagined...',
  fullWidth: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'This input is disabled.',
  disabled: true,
};
