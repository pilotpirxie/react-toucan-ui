import React from 'react';
import styles from './range.module.scss';

export type RangeProps = {
  /**
   * ID of checkbox, also used for label
   */
  id:string;
   /**
   * Should switch be turned on by default?
   */
  defaultChecked?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Range component
 */
export function Range({
  id,
  ...props
}: RangeProps) {
  return (
    <input
      type="range"
      id={id}
      className={styles.range}
      {...props}
    />
  );
}
