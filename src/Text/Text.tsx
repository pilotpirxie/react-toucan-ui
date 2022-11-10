import cx from 'classnames';
import React, { useState } from 'react';
import styles from './text.module.scss';

export type TextProps = {
  /**
   * ID of checkbox, also used for label
   */
  id:string;
   /**
   * Should switch be turned on by default?
   */
  defaultChecked?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Text component
 */
export function Text({
  id,
  defaultChecked = false,
  ...props
}: TextProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <input
      type="text"
      id={id}
      checked={isChecked}
      className={cx(styles.textInput, {})}
      onChange={(e) => setIsChecked(e.target.checked)}
      {...props}
    />
  );
}
