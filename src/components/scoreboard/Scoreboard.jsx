import React from "react";
import styles from "./scoreboard.module.scss";
import Card from "../card/Card";
import Dropdown from "../dropdown/Dropdown";
const Scoreboard = ({
  game,
  subtitle,
  status,
  firstTeam,
  secondTeam,
  matches,
}) => {
  return (
    <>
      <Card gap="2rem" padding="1.6rem">
        <div className={styles.scoreboard_header}>
          <div className={styles.header}>
            <div className={styles.title}>{game}</div>
            <div className={styles.subtitle}>{subtitle}</div>
          </div>
          <div className={styles.status}>{status}</div>
        </div>
        <div className={styles.scoreboard_main}>
          <div className={styles.scoreboard_team}>
            <img src={firstTeam.logo} className={styles.image} alt="" />
            <div className={styles.name}>{firstTeam.name}</div>
          </div>
          <div className={styles.scoreboard_score}>{firstTeam.score}</div>
          <div className={styles.scoreboard_divider}>:</div>
          <div className={styles.scoreboard_score}>{secondTeam.score}</div>
          <div className={styles.scoreboard_team}>
            <img src={secondTeam.logo} className={styles.image} alt="" />
            <div className={styles.name}>{secondTeam.name}</div>
          </div>
        </div>
        <div className={styles.scoreboard_action}>
          <div className={styles.primary_action}>Watch</div>
          <div className={styles.secondary_action}>Bet</div>
        </div>
        <div className={styles.scoreboard_timeline}>
          <div className={styles.section_header}>
            <div className={styles.header}>Next match</div>
            <Dropdown simple={true}>
              <div>Popular</div>
              <div>Oldest</div>
              <div>Newest</div>
              <div>Controversial</div>
            </Dropdown>
          </div>
          <div className={styles.scoreboard_matches}>
            {matches.map(({ time, firstTeam, secondTeam }, index) => (
              <div className={styles.scoreboard_grid} key={index}>
                <div>{time}</div>
                <div>•</div>
                <div style={{ textAlign: "left" }}>{firstTeam}</div>
                <div>vs</div>
                <div style={{ textAlign: "left" }}>{secondTeam}</div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </>
  );
};

export default Scoreboard;
