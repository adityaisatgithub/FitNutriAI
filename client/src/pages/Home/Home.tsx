import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Why Use FitNutriAI?</h2>
      <p className={styles.paragraph}>
        FitNutriAI is your smart fitness and nutrition companion powered by AI.
        Get personalized diet and workout plans, track your progress with visual
        insights, revisit your health history, and chat with an AI
        assistant—everything you need in one place.
      </p>
    </div>
  );
};

export default Home;
