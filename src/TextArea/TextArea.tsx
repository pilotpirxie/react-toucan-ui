import cx from 'classnames';
import React, { useState } from 'react';
import styles from './textArea.module.scss';

export type TextAreaProps = {
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
   * Maximum length allowed
   */
  maxLength?:number;
  /**
   * Should input be disabled?
   */
  disabled?:boolean;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;

/**
 * TextArea component
 */
export function TextArea({
  id,
  fullWidth = false,
  disabled = false,
  maxLength = 250,
  ...props
}: TextAreaProps) {
  enum inputState {
    inactive,
    active,
    filled
  }
  const [inputStatus, setInputStatus] = useState<inputState>(inputState.inactive);
  const [content, setContent] = useState<string>('');
  const placeholder = typeof props.placeholder !== 'undefined' ? props.placeholder : 'TextArea';
  const focusedPlaceholder = props.focusedPlaceholder || placeholder;
  return (
    <div className={cx(
      styles.mainContainer,
      {
        [styles.fullWidth]: fullWidth,
      },
    )}
    >
      <textarea
        id={id}
        className={cx(styles.textInput, styles.fontRegular, styles.styleNone, styles.fullWidth, {
          [styles.disabled]: disabled,
          [styles.placeholderDisabled]: inputStatus === inputState.active,
          [styles.placeholderRegular]: inputStatus === inputState.inactive,
          [styles.placeholderShown]: inputStatus === inputState.inactive,
          [styles.borderActive]: inputStatus === inputState.active
        || inputStatus === inputState.filled,
          [styles.textDark]: inputStatus === inputState.filled,
        })}
        onFocus={(e) => {
          e.currentTarget.placeholder = focusedPlaceholder;
          if (e.currentTarget.value.length === 0) {
            setInputStatus(inputState.active);
          } else {
            setInputStatus(inputState.filled);
          }
        }}
        onBlur={(e) => {
          e.currentTarget.placeholder = placeholder;
          if (e.currentTarget.value.length === 0) {
            setInputStatus(inputState.inactive);
          } else {
            setInputStatus(inputState.filled);
          }
        }}
        onChange={(e) => {
          setContent(e.currentTarget.value);
          if (e.currentTarget.value.length === 0) {
            setInputStatus(inputState.active);
          } else {
            setInputStatus(inputState.filled);
          }
        }}
        {...props}
        maxLength={maxLength}
        disabled={disabled}
      />
      <div className={cx(
        styles.fullWidth,
        styles.lengthIndicator,
        styles.fontRegular,
        styles.textSecondary,
      )}
      >
        {disabled ? '-' : content.length}
        /
        {maxLength}
      </div>
    </div>
  );
}
