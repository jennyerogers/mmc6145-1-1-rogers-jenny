import styles from '../styles/home.module.css'

const Project = ({projectName, websiteLink}) => (
    <div className={styles.homeText}>
        <h2 className={styles.projectTitle}>{projectName}</h2>
        <button className={styles.projectBtn}><a href={websiteLink} target="_blank" rel="noopener noreferrer" className={styles.projectBtnText}>View GitHub</a></button>
    </div>
    )
export default Project