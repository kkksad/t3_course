import styles from './index.module.css';
const Footer: React.FC = () => {
    const now = new Date();

    function beautifulDay(date: Date): string {
      const year = date.getFullYear();
      const day = date.getUTCDate();
      const month = date.getMonth() + 1; 
      
      return `Today is ${month}/${day}/${year}`;
    };

    return(
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <p>{beautifulDay(now)}</p>
        </div>
      </footer>
    );

};
export default Footer   
