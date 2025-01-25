import { UserSkillsProps} from './types';
import styles from './index.module.css';


const UserSkills: React.FC<UserSkillsProps> =({ skills })=>{

    return(
        <div className={styles.title}>
            <h1>Skills</h1>
            <div  className={styles.skills}>
            {skills.map((skill) => (
                <div key={skill.id} className={styles.skill}>
                    {skill.value}
                </div>
      ))}
        </div>
        </div>
    );
};
export default UserSkills;