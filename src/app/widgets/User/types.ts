export interface User {
    firstName: string;
    lastName: string;
    age: number;
    role: string;
    place: string;
  }
  
export interface UserCardProps {
    user: User;
  }