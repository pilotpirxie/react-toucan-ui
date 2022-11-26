import cx from 'classnames';
import React, { useRef, useState } from 'react';
import { ColorPickerEmpty } from 'iconoir-react';
import styles from './colorInput.module.scss';

export type ColorInputProps = {
  /**
   * ID of input, optional
   */
  id?:string;
  /**
   * Should input fill whole available area?
   */
  fullWidth?:boolean;
  /**
   * Should input be disabled?
   */
  disabled?:boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * ColorInput component
 */
export function ColorInput({
  id,
  fullWidth = false,
  disabled = false,
  ...props
}: ColorInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [color, setColor] = useState<string>('#FFFFFF');
  return (
    <div
      className={cx(
        styles.textInput,
        styles.fontRegular,
        styles.placeholderShown,
        styles.borderActive,
        {
          [styles.fullWidth]: fullWidth,
          [styles.disabled]: disabled,
        },
      )}
      style={{ backgroundColor: color }}
      onClick={() => inputRef.current!.click()}
    >
      <input
        type="color"
        id={id}
        className={cx(
          styles.hidden,
        )}
        value={color}
        onChange={(e) => { setColor(e.currentTarget.value); }}
        {...props}
        disabled={disabled}
        ref={inputRef}
      />
      <div className={cx(styles.controlButtons, {
        [styles.hidden]: disabled,
      })}
      >
        <ColorPickerEmpty
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={cx(styles.textDark)}
        />
      </div>
    </div>
  );
}
