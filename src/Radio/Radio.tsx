import React from 'react';
import './radio.module.scss';

export type RadioProps = {
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Radio component
 */
export function Radio({
  ...props
}: RadioProps) {
  return (
    <input
      type="radio"
      {...props}
    />
  );
}
