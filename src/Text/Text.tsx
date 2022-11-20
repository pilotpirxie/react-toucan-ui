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
  /**
   * HTML Input placeholder.
   */
  placeholder?:string;
  /**
   * Optional placeholder which will be displayed after input focus event.
   */
  focusedPlaceholder?:string;
  /**
   * Should input be disabled?
   */
  disabled?:boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Text component
 */
export function Text({
  id,
  fullWidth = false,
  disabled = false,
  ...props
}: TextProps) {
  const placeholder = typeof props.placeholder !== 'undefined' ? props.placeholder : 'Text';
  const focusedPlaceholder = typeof props.focusedPlaceholder !== 'undefined' ? props.focusedPlaceholder : placeholder;
  return (
    <input
      type="text"
      id={id}
      className={cx(styles.textInput, styles.fontRegular, {
        [styles.fullWidth]: fullWidth,
      })}
      onFocus={(e) => { e.currentTarget.placeholder = focusedPlaceholder; }}
      onBlur={(e) => { e.currentTarget.placeholder = placeholder; }}
      {...props}
      disabled={disabled}
    />
  );
}
