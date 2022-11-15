import cx from 'classnames';
import React, { useRef } from 'react';
import { Button } from '../Button';
import styles from './number.module.scss';

export type NumberProps = {
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
 * Number component
 */
export function Number({
  id,
  fullWidth = false,
  focusedPlaceholder = 'Type something...',
  disabled = false,
  ...props
}: NumberProps) {
  const inputRef = useRef<any>(null);
  const placeholder = typeof props.placeholder !== 'undefined' ? props.placeholder : 'Number';
  return (
    <div
      className={cx(styles.textInput, styles.fontRegular, {
        [styles.fullWidth]: fullWidth,
      })}
    >
      <input
        type="number"
        id={id}
        className={cx(styles.styleNone, styles.fontRegular)}
        onFocus={(e) => { e.currentTarget.placeholder = focusedPlaceholder; }}
        onBlur={(e) => { e.currentTarget.placeholder = placeholder; }}
        {...props}
        disabled={disabled}
        ref={inputRef}
      />
      <Button buttonStyle="outlined" onClick={() => { inputRef.current!.stepUp(); }} color="dark">
        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
          <path d="M6 15l6-6 6 6" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Button>
      <Button buttonStyle="outlined" onClick={() => { inputRef.current!.stepDown(); }} color="dark">
        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
          <path d="M6 9l6 6 6-6" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Button>
    </div>
  );
}
