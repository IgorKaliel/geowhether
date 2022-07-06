import styles from './WheatherBox.module.css'

import WheatherImage from '../assets/images/wheather.svg';

export function WheatherBox() {
  return (
    <div className={styles.wheatherBoxWrapper}>
      <h1>Wheather App</h1>
      <p>Search a address or enable your location.</p>
      
      <img src={WheatherImage} width="500px" alt="" />

    </div>
  )
}