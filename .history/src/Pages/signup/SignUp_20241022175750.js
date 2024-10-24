import styles from './SignUp.module.css'


export default function SignUp() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <form onSubmit={handleSubmit}  className={styles['signup-form']}>
          <h2>SignUp</h2>
          <label>
              <span>Email:</span>
              <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
          </label>
          <label>
              <span>Password:</span>
              <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
          </label>


          <label>
              <button className="btn">SignUp</button>
          </label>
    </form>
  )
}
