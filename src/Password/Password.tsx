import cx from 'classnames';
import React, { useRef, useState } from 'react';
import { EyeEmpty, EyeOff } from 'iconoir-react';
import styles from './password.module.scss';

export type PasswordProps = {
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
  /**
   * Should password be visible?
   */
  isShown?:boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Password component
 */
export function Password({
  id,
  fullWidth = false,
  disabled = false,
  isShown = false,
  ...props
}: PasswordProps) {
  enum inputState {
    inactive = 0,
    active = 1,
    filled = 2
  }
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputStatus, setInputStatus] = useState<inputState>(inputState.inactive);
  const [show, setShow] = useState(isShown || false);
  const placeholder = typeof props.placeholder !== 'undefined' ? props.placeholder : 'Password';
  const focusedPlaceholder = props.focusedPlaceholder || placeholder;
  return (
    <div
      className={cx(styles.textInput, styles.fontRegular, {
        [styles.fullWidth]: fullWidth,
        [styles.disabled]: disabled,
        [styles.placeholderShown]: inputStatus === inputState.inactive,
        [styles.borderActive]: inputStatus === inputState.active
         || inputStatus === inputState.filled,
        [styles.textDark]: inputStatus === inputState.filled,
      })}
    >
      <input
        type={show ? 'text' : 'password'}
        id={id}
        className={cx(styles.styleNone, styles.fontRegular)}
        onFocus={(e) => {
          e.currentTarget.placeholder = focusedPlaceholder;
          setInputStatus(inputState.active);
        }}
        onBlur={(e) => {
          e.currentTarget.placeholder = placeholder;
          if (e.currentTarget.value.length === 0) {
            setInputStatus(inputState.inactive);
          } else {
            setInputStatus(inputState.filled);
          }
        }}
        {...props}
        disabled={disabled}
        ref={inputRef}
      />
      <div className={cx(styles.controlButtons, {
        [styles.hidden]: disabled,
      })}
      >
        {
           show
             ? <EyeEmpty onClick={() => { setShow(!show); }} />
             : <EyeOff onClick={() => { setShow(!show); }} />
          }
      </div>
    </div>
  );
}
