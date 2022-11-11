import cx from 'classnames';
import React from 'react';
import styles from './text.module.scss';

export type TextProps = {
  /**
   * ID of input, optional
   */
  id?:string;
  /**
   * Should input fill whole available area?
   */
  fullWidth?:boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Text component
 */
export function Text({
  id,
  fullWidth = false,
  ...props
}: TextProps) {
  return (
    <input
      type="text"
      id={id}
      className={cx(styles.textInput, styles.fontRegular, {
        [styles.fullWidth]: fullWidth,
      })}
      {...props}
    />
  );
}
