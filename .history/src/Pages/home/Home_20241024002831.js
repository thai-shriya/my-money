import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}></div>
      <div className={styles.sidebar}> <Transaction></Transaction> </div>
      Home
    </div>
  )
}
