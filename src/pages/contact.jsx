import styles from '../styles/home.module.css';
import linkedInPic from '../images/linkedin.png'
import gitHubPic from '../images/github.png'

export default function Contact() {
  const gitHub = 'https://github.com/jennyerogers'
  const linkedIn = 'https://www.linkedin.com/in/jennyerogers/' 
  const email = 'mailto:jennyrogersmedia@gmail.com'

  return (
    <main className={styles.pageContent}>
      <div className={styles.homeText}>
        <h1>Let's Talk</h1>
        <p className={styles.contactText}>Feel free to explore my LinkedIn and GitHub below.</p>
        
        <div className={styles.contactContent}>
          <div>
            <a href={linkedIn} target="_blank" rel="noopener noreferrer">
              <img src={linkedInPic} alt="LinkedIn icon" width="150" height="auto" className={styles.icon}/>
            </a>
          </div>
          <div>
            <a href={gitHub} target="_blank" rel="noopener noreferrer">
              <img src={gitHubPic} alt="GitHub icon" width="150" height="auto" className={styles.icon}/>
            </a>
          </div>
        </div>
        <p className={styles.contactText}>Questions? Want to connect? Email me at <a href={email}>jennyrogersmedia@gmail.com</a></p>
      </div>
    </main>
  );
}
