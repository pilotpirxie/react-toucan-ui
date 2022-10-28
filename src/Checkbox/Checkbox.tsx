import React from 'react';
import './checkbox.module.scss';

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Checkbox component
 */
export function Checkbox({
  ...props
}: CheckboxProps) {
  return (
    <input
      type="checkbox"
      {...props}
    />
  );
}
