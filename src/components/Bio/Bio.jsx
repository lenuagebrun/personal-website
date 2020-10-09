import React from 'react';
import styles from './Bio.module.css'

function Bio(props) {
  return (
    <div className={styles.Bio}>
      <article>
        <img className={styles.portrait} src='https://i.imgur.com/btSGJZU.png' />
        <div className={styles.biotext}>
          <h2>Story of P-A</h2>
          <p>Pierre-Alexandre is a french canadian nerd who is just starting out in the world of coding</p>
        </div>
      </article>
    </div>
  )
}

export default Bio;