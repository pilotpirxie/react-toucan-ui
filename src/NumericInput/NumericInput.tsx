import cx from 'classnames';
import React, { useRef, useState } from 'react';
import { NavArrowUp, NavArrowDown } from 'iconoir-react';
import styles from './numericInput.module.scss';

export type NumericInputProps = {
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
   * Control buttons visible only when input hovered?
   */
  showButtonsOnHover?:boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * NumericInput component
 */
export function NumericInput({
  id,
  fullWidth = false,
  disabled = false,
  showButtonsOnHover = false,
  ...props
}: NumericInputProps) {
  enum inputState {
    inactive,
    active,
    filled
  }
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputStatus, setInputStatus] = useState<inputState>(inputState.inactive);
  const placeholder = typeof props.placeholder !== 'undefined' ? props.placeholder : 'NumericInput';
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
      onClick={() => { inputRef.current!.focus(); }}
    >
      <input
        type="number"
        id={id}
        className={cx(
          styles.styleNone,
          styles.fontRegular,
          styles.hideSpinnerArrows,
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
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            inputRef.current!.stepUp();
            setInputStatus(inputState.filled);
          }}
          className={cx(styles.backgroundDark, styles.outlined, styles.outlineThin)}
        >
          <NavArrowUp strokeWidth={2.5} />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            inputRef.current!.stepDown();
            setInputStatus(inputState.filled);
          }}
          className={cx(styles.backgroundDark, styles.outlined, styles.outlineThin)}
        >
          <NavArrowDown strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
