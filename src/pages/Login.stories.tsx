/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import cx from 'classnames';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styles from '../TextInput/textInput.module.scss';

import { TextInput, PasswordInput, Button } from '../index';

export default {
  title: 'Pages/Login',
  argTypes: {},
} as ComponentMeta<typeof TextInput & typeof PasswordInput & typeof Button>;

const Template: ComponentStory<
  typeof TextInput &
  typeof PasswordInput &
  typeof Button
  > = () => (
    <div style={{ maxWidth: '250px' }}>
      <label className={cx(styles.fontRegular)} htmlFor="login">
        Login
      </label>
      <TextInput id="login" fullWidth placeholder="Login" />
      <label className={cx(styles.fontRegular)} htmlFor="password">
        Password
      </label>
      <PasswordInput id="password" fullWidth placeholder="Password" />
      <Button fullWidth>Sign in</Button>
    </div>
  );

export const LogIn = Template.bind({});
LogIn.args = {
  placeholder: 'Text',
};
