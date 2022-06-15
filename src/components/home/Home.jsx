import React, { Component } from "react";
import styles from "./home.module.scss";
import jumbo from "./jumbotron.jpg";
import jinx from "./amogus.png";
import logo from "./jumbotron_logo.png";
import Dropdown from "../dropdown/Dropdown";
import Card from "../card/Card";
import news from "./news.png";
import team1 from "./team1.png";
import team2 from "./team2.png";
import Scoreboard from "./../scoreboard/Scoreboard";
const Home = (props) => {
  const firstTeam = {
    logo: team1,
    name: "FaZe Clan",
    score: 2,
  };
  const secondTeam = {
    logo: team2,
    name: "The Ventura",
    score: 0,
  };
  const matches = [
    {
      time: "10.45",
      firstTeam: "Aerowolf",
      secondTeam: "Bigetron",
    },
    {
      time: "12.00",
      firstTeam: "AlterEgo",
      secondTeam: "Aura",
    },
    {
      time: "14.00",
      firstTeam: "Brent",
      secondTeam: "Onic",
    },
    {
      time: "16.00",
      firstTeam: "Evos SG",
      secondTeam: "Geek fam",
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.primary_layout}>
          <div className={styles.jumbotron}>
            <div className={styles.jumbotron_content}>
              <div className={styles.jumbotron_image}>
                <img src={jinx} className={styles.image} alt="" />
              </div>
              <div className={styles.content}>
                <div className={styles.logo}>
                  {" "}
                  <img src={logo} alt="" />
                </div>
                <div className={styles.title}>
                  Butterfly VS Peacock - ESL Pro League Season 16 - Playoffs
                </div>
                <div className={styles.subtitle}>
                  League Of Legends • Indonesia{" "}
                </div>
                <div className={styles.button}>Watch</div>
              </div>
            </div>
          </div>
          <section>
            <div className={styles.section_header}>
              <div className={styles.header}>News</div>
              <Dropdown>
                <div>Popular</div>
                <div>Oldest</div>
                <div>Newest</div>
                <div>Controversial</div>
              </Dropdown>
            </div>
            <div className={styles.card_grid}>
              <Card image={news}>
                <div className={styles.card_title}>Festival of Cosplays</div>
                <div className={styles.card_subtitle}>IMPACTNATION</div>
              </Card>
              <Card image={news}>
                <div className={styles.card_title}>Festival of Cosplays</div>
                <div className={styles.card_subtitle}>IMPACTNATION</div>
              </Card>
              <Card image={news}>
                <div className={styles.card_title}>Festival of Cosplays</div>
                <div className={styles.card_subtitle}>IMPACTNATION</div>
              </Card>
            </div>
          </section>
          <section>
            <div className={styles.section_header}>
              <div className={styles.header}>Streaming</div>
              <Dropdown>
                <div>Popular</div>
                <div>Oldest</div>
                <div>Newest</div>
                <div>Controversial</div>
              </Dropdown>
            </div>
            <div className={styles.card_grid}></div>
          </section>
        </div>
        <div className={styles.secondary_layout}>
          <Dropdown>
            <div>Popular</div>
            <div>Oldest</div>
            <div>Newest</div>
            <div>Controversial</div>
          </Dropdown>
          <Scoreboard
            game="League of Legends"
            subtitle="Group stage - Matchday 1 of 5"
            status="Live"
            firstTeam={firstTeam}
            secondTeam={secondTeam}
            matches={matches}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
