import React from 'react';
import './input.css';
import cx from 'classnames';

export interface InputProps {
  /**
   * Input value
   */
  value: string;
  /**
   * Change handler
   */
  onChange: () => void;
  /**
   * Wide input
   */
  wide?: boolean;
}

/**
 * Basic input component
 */
export function Input({
  onChange,
  value,
  wide = false,
  ...props
}: InputProps) {
  return (
    <div className="input-wrapper">
      <input
        onChange={onChange}
        className={cx({
          wide,
        })}
        value={value}
        {...props}
      />
    </div>
  );
}
