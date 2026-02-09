import styles from './FeatureItem.module.css'

function FeatureItem({ icon: Icon, text, index }) {
  const itemClass = typeof index === 'number' ? styles[`item-${index + 1}`] : ''
  return (
    <li className={`${styles.featureItem} ${itemClass}`.trim()}>
      <div className={styles.space}></div>
      <div className={styles.visualContent}>
        <span className={styles.iconWrapper} aria-hidden="true">
          {Icon ? <Icon className={styles.iconSvg} focusable="false" /> : null}
        </span>
        <span className={styles.text}>{text}</span>
      </div>
    </li>
  )
}

export default FeatureItem
