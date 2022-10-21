import cx from 'classnames';
import React from 'react';
import styles from './button.module.scss';

export type ButtonProps = {
  /**
   * The color of the button.
   */
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'warning'
    | 'success'
    | 'info'
    | 'light'
    | 'dark';
  /**
   * How large should the button be?
   */
  size?: 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';
  /**
   * Should button have regular look, be outlined or serve as a link?
   */
  style?: 'standard' | 'outlined' | 'link';
  /**
   * Button contents
   */
  children: React.ReactNode | string;
  /**
   * Disabled state
   */
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Primary UI component for user interaction
 */
export function Button({
  size = 'medium',
  color = 'primary',
  style = 'standard',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cx({
        [styles.backgroundPrimary]: color === 'primary',
        [styles.backgroundSecondary]: color === 'secondary',
        [styles.backgroundTertiary]: color === 'tertiary',
        [styles.backgroundSuccess]: color === 'success',
        [styles.backgroundInfo]: color === 'info',
        [styles.backgroundWarning]: color === 'warning',
        [styles.backgroundDanger]: color === 'danger',
        [styles.backgroundLight]: color === 'light',
        [styles.backgroundDark]: color === 'dark',

        [styles.sizeExtraSmall]: size === 'extraSmall',
        [styles.sizeSmall]: size === 'small',
        [styles.sizeMedium]: size === 'medium',
        [styles.sizeLarge]: size === 'large',
        [styles.sizeExtraLarge]: size === 'extraLarge',

        [styles.outlined]: style === 'outlined',
        [styles.link]: style === 'link',
      })}
      {...props}
    >
      {children}
    </button>
  );
}
