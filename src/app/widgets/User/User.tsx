import Image from 'next/image';
import UserImage from '../../shared/images/logo.jpg';
import { UserCardProps } from './types';
import styles from './index.module.css';


const UserCard: React.FC<UserCardProps> = ({ user }) => {

  const {firstName, lastName, place, role} = {...user}

    return(
        <div className={styles.usercard}>
          <Image src={UserImage} alt={'user image'}/>
          <h1> {firstName.toLocaleUpperCase()} {lastName.toLocaleUpperCase()}</h1>
          <h3> {place}, {role}</h3>
        </div>
      )
    
      };
export default UserCard