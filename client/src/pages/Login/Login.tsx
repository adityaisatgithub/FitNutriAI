import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <Box className={styles.container}>
      <form>
        <h1 className={styles.formTitle}>Login</h1>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className={styles.link}>
            Sign up
          </Link>
          .
        </p>
        <div className={styles.backHome}>
          <Link to="/" className={styles.link}>
            Back to Home
          </Link>
        </div>
      </form>
    </Box>
  );
};

export default Login;
