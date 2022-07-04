import styles from './App.module.css';
import { WheatherBox } from './components/WheatherBox';

import { WheatherForm } from './components/WheatherForm'

import './global.css'

function App() {

  return (
    <>

      <main className={styles.contentWrapper}>
          <WheatherBox />
          <WheatherForm />
      </main>
    </>
  )
}

export default App
