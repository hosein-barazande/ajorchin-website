import React from "react";
import styles from "./PortfolioCard.module.css";

type PortfolioCardProps = {
  title: string;
  text: string;
  image: string;
  link?: string;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, text, image, link = "#" }) => {
  return (
    <a href={link} className={styles.linkWrapper}>
      <div className={styles.portfolioCard}>
        <div className={styles.portfolioCardContent}>
          <h3 className={styles.portfolioCardTitle}>{title}</h3>
          <p className={styles.portfolioCardText}>{text}</p>

          <div className={styles.portfolioCardLink}>
            <span>دیدن پروژه</span>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={styles.icon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </div>
        </div>

        <img src={image} alt={title} className={styles.portfolioCardImage} />
      </div>
    </a>
  );
};

export default PortfolioCard;
