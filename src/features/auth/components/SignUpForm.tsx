import Modal from "@/components/ui/Modal/Modal"
import styles from "./auth.module.css"
import { useAuthStore } from "../stores/auth-store"
import { useState } from "react"
const SignUpForm = () => {
  const signup = useAuthStore((state) => state.signup);
  const loading = useAuthStore((state) => state.loading);
  const error = useAuthStore((state) => state.error);

  async function handleSubmit(
    event: React.SubmitEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    await signup({
      email,
      password,
    });
  }


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
      <Modal 
        title="Sign up" 
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
          {error && <p>{error}</p>}
          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Creating account..."
              : "Create account"}
          </button>
        </form>
        <div className={styles.authNav}>
          <a href="/auth/login">Already have an account?</a>
        </div>
      </Modal>
  )
}

export default SignUpForm