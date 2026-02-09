import styles from './Button.module.css'

function Button({ children, variant = 'primary', href, onClick, disabled = false, className = '' }) {
  const classNames = `${styles.button} ${styles[variant]} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={classNames}>
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
    >
      {children}
    </button>
  )
}

export default Button
