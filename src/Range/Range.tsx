import cx from 'classnames';
import React, { useState } from 'react';
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
  const handleChange = (e:any) => {
    const slider = {
      min: 0,
      max: 100,
      progress: 50,
    };
    if (parseInt(e.target.min, 10)) {
      slider.min = parseInt(e.target.min, 10);
    }
    if (parseInt(e.target.max, 10)) {
      slider.max = parseInt(e.target.max, 10);
    }
    slider.progress = (((e.target.value - slider.min) / (slider.max - slider.min)) * 100);
    document.documentElement.style.setProperty('--progress', `${slider.progress}%`);
  };
  return (
    <div className={styles.slider}>
      <div className={styles.progress}>
        <input
          type="range"
          id={id}
          className={styles.range}
          onChange={(e) => handleChange(e)}
          {...props}
        />
      </div>
    </div>
  );
}
