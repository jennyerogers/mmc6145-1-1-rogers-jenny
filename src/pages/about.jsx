import styles from '../styles/home.module.css'
import headshot from '../images/headshot.jpeg'

export default function About() {
    return (
       <main className={styles.pageContent}>
          <h1> </h1>
        <div className={styles.homeText}>
          <h1>About Me</h1>
          <div className={styles.aboutContainer}>
            <img src={headshot} alt="headshot" width="200" height="auto" className={styles.headshotImage} />
            <div>
              <p className={styles.aboutText}>Hello! Based in Florida, I am in my last semester of my master's degree in web design and online communications from the University of Florida.</p>
              <p className={styles.aboutText}>I have experience spanning public relations, social media, journalism, content writing, and now, web design!</p>
              <p className={styles.aboutText}>During my time as a PR student, I interned for St. Jude Children's Research Hospital, WUFT News and Girls on the Run.</p>
              <p className={styles.aboutText}>After I graduate, I hope to enter the communications industry as a graphic designer or content writer. It's my dream to work for a music-based company like Rolling Stone or Spotify!</p>
              <p className={styles.aboutText}>Outside of school, you can find me rewatching my favorite movies, drawing, working out or listening to good tunes.</p>
            </div>
          </div>
        </div>
      </main>
    )
  }