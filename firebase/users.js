import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from './index.js';

// Get a list of users from database
export async function GetUsers() {
    const usersCol = collection(db, 'users');
    const userSnapshot = await getDocs(usersCol);
    const userList = userSnapshot.docs.map(doc => doc.data());
    return userList;
}