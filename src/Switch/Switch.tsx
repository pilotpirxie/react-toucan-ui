import cx from 'classnames';
import React, { useState } from 'react';
import styles from './switch.module.scss';

export type SwitchProps = {
  id:string;
  defaultChecked: boolean;
  checked: boolean;
}&React.InputHTMLAttributes<HTMLInputElement> & React.LabelHTMLAttributes<HTMLLabelElement>;

/**
 * Switch component
 */
export function Switch({
  id = 'switch',
  ...props
}: SwitchProps) {
  const [isChecked, setIsChecked] = useState(props.defaultChecked || props.checked);
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
          onChange={(e) => setIsChecked(e.target.checked)}
          {...props}
        />
      </label>
    </div>
  );
}
