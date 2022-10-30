import cx from 'classnames';
import React from 'react';
import styles from './checkbox.module.scss';

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Checkbox component
 */
export function Checkbox({
  ...props
}: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className={cx({ [styles.checkbox]: true })}
      {...props}
    />
  );
}
