import cx from 'classnames';
import React from 'react';
import styles from './text.module.scss';

export type TextProps = {
  /**
   * ID of input, optional
   */
  id?:string;
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Text component
 */
export function Text({
  id,
  ...props
}: TextProps) {
  return (
    <input
      type="text"
      id={id}
      className={cx(styles.textInput, styles.fontRegular, {})}
      {...props}
    />
  );
}
