import styles from './Button.module.css'

function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  disabled = false,
  className = '',
  ...rest
}) {
  const classNames = `${styles.button} ${styles[variant]} ${className}`.trim()

  if (href) {
    const handleAnchorClick = (event) => {
      if (disabled) {
        event.preventDefault()
        return
      }

      if (onClick) {
        onClick(event)
      }
    }

    return (
      <a
        href={href}
        className={classNames}
        onClick={handleAnchorClick}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      type="button"
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
