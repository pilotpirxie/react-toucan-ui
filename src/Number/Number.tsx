import cx from 'classnames';
import React, { useRef } from 'react';
import { NavArrowUp, NavArrowDown } from 'iconoir-react';
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
  disabled = false,
  ...props
}: NumberProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const placeholder = typeof props.placeholder !== 'undefined' ? props.placeholder : 'Number';
  const focusedPlaceholder = typeof props.focusedPlaceholder !== 'undefined' ? props.focusedPlaceholder : placeholder;
  return (
    <div
      className={cx(styles.textInput, styles.fontRegular, {
        [styles.fullWidth]: fullWidth,
        [styles.disabled]: disabled,
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
      <div className={cx(styles.controlButtons, {
        [styles.hidden]: disabled,
      })}
      >
        <button type="button" onClick={() => { inputRef.current!.stepUp(); }} className={cx(styles.backgroundDark, styles.outlined)}>
          <NavArrowUp strokeWidth={2.5} />
        </button>
        <button type="button" onClick={() => { inputRef.current!.stepDown(); }} className={cx(styles.backgroundDark, styles.outlined)}>
          <NavArrowDown strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
