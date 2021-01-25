import React from 'react'

import {ButtonBase, ButtonDisable, ButtonVariant, ButtonSize} from './theme'

import PropTypes from 'prop-types'

const Button = ({
  className,
  loading,
  variant,
  size,
  type,
  children,
  disabled,
  onClick,
  ...props
}) => {
  const classNames =
    ButtonBase +
    ' ' +
    (disabled === true ? ButtonDisable : ButtonVariant[variant]) +
    ' ' +
    ButtonSize[size] +
    ' ' +
    (className ? className : '')

  const onClickHandler = (event) => {
    if (disabled || loading) return
    onClick && onClick(event)
  }

  return (
    <button
      onClick={onClickHandler}
      className={classNames}
      disabled={disabled}
      type={type}
      aria-label={type}
      {...props}>
      {!loading && children}
      {loading && (
        <div
          className="h-5 w-5 border-2 border-gray-800 border-t-2 rounded-full animate-spin"
          style={{borderTopColor: '#f1f1f1'}}
        />
      )}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'elevation']).isRequired,
  size: PropTypes.oneOf(['big', 'normal', 'small']).isRequired,
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}
export default Button
