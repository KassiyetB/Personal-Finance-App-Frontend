import Modal from "@/components/ui/Modal/Modal"
import styles from "./auth.module.css"
import { useAuthStore } from "../stores/auth-store"
import { useState } from "react"

const LogInForm = () => {
  const login = useAuthStore((state) => state.login);
  const loading = useAuthStore((state) => state.loading);
  const error = useAuthStore((state) => state.error);

  async function handleSubmit(
    event: React.SubmitEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    await login({
      email,
      password,
    });
  }


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Modal 
        title="Login" 
        isOpen={true} 
        onClose={()=>0}
        closeButton={false}
      >
        <form 
        className={styles.authForm}
        onSubmit={handleSubmit}
        >
          <input 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="email" 
            type="email" 
          />
          <input 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="password" 
            type="password" 
          />
          {error && (
            <p>{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Signing in..."
              : "Sign in"}
          </button>
        </form>
        <div className={styles.authNav}>
          <a href="/auth/signup">Don't have an account?</a>
          <a href="#">Forgot your password?</a>
        </div>
      </Modal>
    </div>
  )
}

export default LogInForm