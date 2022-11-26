import cx from 'classnames';
import React, { useRef, useState } from 'react';
import { EyeEmpty, EyeOff } from 'iconoir-react';
import styles from './passwordInput.module.scss';

export type PasswordInputProps = {
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
  /**
   * Control buttons visible only when input hovered?
   */
  showButtonsOnHover?:boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * PasswordInput component
 */
export function PasswordInput({
  id,
  fullWidth = false,
  disabled = false,
  isShown = false,
  showButtonsOnHover = false,
  ...props
}: PasswordInputProps) {
  enum inputState {
    inactive,
    active,
    filled
  }
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputStatus, setInputStatus] = useState<inputState>(inputState.inactive);
  const [show, setShow] = useState(isShown || false);
  const placeholder = typeof props.placeholder !== 'undefined' ? props.placeholder : 'PasswordInput';
  const focusedPlaceholder = props.focusedPlaceholder || placeholder;
  return (
    <div
      className={cx(styles.textInput, styles.fontRegular, {
        [styles.fullWidth]: fullWidth,
        [styles.disabled]: disabled,
        [styles.showButtonsOnHover]: showButtonsOnHover,
        [styles.placeholderShown]: inputStatus === inputState.inactive,
        [styles.borderActive]: inputStatus === inputState.active
         || inputStatus === inputState.filled,
        [styles.textDark]: inputStatus === inputState.filled,
      })}
      onClick={() => inputRef.current!.focus()}
    >
      <input
        type={show ? 'text' : 'password'}
        id={id}
        className={cx(
          styles.styleNone,
          styles.fontRegular,
          { [styles.placeholderDisabled]: inputStatus === inputState.active },
        )}
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
        ref={inputRef}
      />
      <div className={cx(styles.controlButtons, {
        [styles.hidden]: disabled,
      })}
      >
        {
           show
             ? (
               <EyeEmpty
                 onClick={(e) => {
                   e.stopPropagation();
                   setShow(!show);
                 }}
                 style={{ cursor: 'pointer' }}
               />
             )
             : (
               <EyeOff
                 onClick={(e) => {
                   e.stopPropagation();
                   setShow(!show);
                 }}
                 style={{ cursor: 'pointer' }}
               />
             )
          }
      </div>
    </div>
  );
}
