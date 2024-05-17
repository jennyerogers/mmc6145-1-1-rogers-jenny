import styles from '../styles/home.module.css'
import Project from '../components/project'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}></div>

      <h1 className={styles.heading1}>Hey there! I'm Jenny. </h1>
      <div className={styles.homeText}>
        <p> My name is Jenny, and I'm a writer and designer from Memphis, TN, living in Florida while I finish up my master's in web design. Feel free to take a look around!</p>

      <div>
        <Project 
          projectName="Titanic Website"
         
          websiteLink="https://github.com/Seiraeurta31/Class_Project_2023_Titanic"
        />
        <Project 
          projectName="Animal Website" 
          websiteLink="https://github.com/jennyerogers/com6338-10-10-rogers-pope" 
        />
         </div>
      </div>
    </main>
  );
}