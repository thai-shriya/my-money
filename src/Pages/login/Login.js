import styles from './Login.module.css'
import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isPending}= useLogin()
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password)
        
    }
    

  return (
      <form onSubmit={handleSubmit}  className={styles['login-form']}>
          <h2>Login</h2>
          <label>
              <span>Email:</span>
              <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
          </label>
          <label>
              <span>Password:</span>
              <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
          </label>

          <label>
              {!isPending && <button className="btn">Login</button>}
              {isPending && <button className='btn' disabled>Loading</button>}
              {error && <p>{error}</p>}
          </label>
    </form>
  )
}
