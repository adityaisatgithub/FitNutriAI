import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Signup.module.css";

const Signup = () => {
  return (
    <Box className={styles.container}>
      <form>
        <h1 className={styles.formTitle}>Sign Up</h1>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={styles.input}
          />
        </div>
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
          Sign Up
        </button>
        <p>
          Already have an account?{" "}
          <Link to="/login" className={styles.link}>
            Login
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

export default Signup;
