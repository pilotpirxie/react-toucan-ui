import cx from 'classnames';
import React, { useState } from 'react';
import styles from './switch.module.scss';

export type SwitchProps = {
  /**
   * ID of checkbox, also used for label
   */
  id:string;
   /**
   * Should switch be turned on by default?
   */
  checked?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Switch component
 */
export function Switch({
  id,
  checked = false,
  ...props
}: SwitchProps) {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <div
      className={cx({
        [styles.switch]: true,
        [styles.outlinePrimary]: isChecked,
        [styles.outlineSecondary]: !isChecked,
      })}
    >
      <label
        htmlFor={id}
        className={cx({
          [styles.move]: isChecked,
          [styles.bgPrimary]: isChecked,
          [styles.bgSecondary]: !isChecked,
        })}
      >
        <input
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          {...props}
        />
      </label>
    </div>
  );
}
