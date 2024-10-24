import styles from './Login.module.css'

export default function Login() {
  return (
      <form className={styles['login-form']}>
          <h2>Login</h2>
          <label>
              <span>Email:</span>
              <input type="email"></input>
          </label>
          <label>
              <span>Password:</span>
              <input type="password"></input>
          </label>

          <label>
              <button className="btn">Login</button>
          </label>
    </form>
  )
}
