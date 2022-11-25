import cx from 'classnames';
import React, { useState } from 'react';
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
  enum inputState {
    inactive,
    active,
    filled
  }
  const [inputStatus, setInputStatus] = useState<inputState>(inputState.inactive);
  const placeholder = typeof props.placeholder !== 'undefined' ? props.placeholder : 'Text';
  const focusedPlaceholder = props.focusedPlaceholder || placeholder;
  return (
    <input
      type="text"
      id={id}
      className={cx(styles.textInput, styles.fontRegular, styles.styleNone, {
        [styles.fullWidth]: fullWidth,
        [styles.disabled]: disabled,
        [styles.placeholderDisabled]: inputStatus === inputState.active,
        [styles.placeholderRegular]: inputStatus === inputState.inactive,
        [styles.placeholderShown]: inputStatus === inputState.inactive,
        [styles.borderActive]: inputStatus === inputState.active
         || inputStatus === inputState.filled,
        [styles.textDark]: inputStatus === inputState.filled,
      })}
      onFocus={(e) => {
        e.currentTarget.placeholder = focusedPlaceholder;
        if (e.currentTarget.value.length === 0) {
          setInputStatus(inputState.active);
        } else {
          setInputStatus(inputState.filled);
        }
      }}
      onBlur={(e) => {
        e.currentTarget.placeholder = placeholder;
        if (e.currentTarget.value.length === 0) {
          setInputStatus(inputState.inactive);
        } else {
          setInputStatus(inputState.filled);
        }
      }}
      onChange={(e) => {
        if (e.currentTarget.value.length === 0) {
          setInputStatus(inputState.active);
        } else {
          setInputStatus(inputState.filled);
        }
      }}
      {...props}
      disabled={disabled}
    />
  );
}
