import styles from "../css_modules/NotFoundPage.module.css";
import React from "react";

function handleGoHome(): void {
  window.location.href = "/";
}

function PageNotFound(): React.JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.description}>
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <div className={styles.illustration}>
          <div className={styles.astronaut}>
            <div className={styles.head}></div>
            <div className={styles.body}></div>
            <div className={styles.legs}>
              <div className={styles.leg}></div>
              <div className={styles.leg}></div>
            </div>
          </div>
          <div className={styles.stars}>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
          </div>
        </div>
        <button className={styles.button} onClick={handleGoHome}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
