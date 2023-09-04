import React from 'react'
import styles from './Step.module.css';

const Step = ({step, text }) => {
  return (
    <div className={styles.container}>
      <p className={styles.stepNumbers}>{step}</p>
      <p className={styles.text}>{text}</p>
    <div className={styles.stepBorder}></div>
    </div>
  )
}

export default Step