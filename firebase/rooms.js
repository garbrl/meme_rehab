import { doc, getDoc } from 'firebase/firestore';
import { db } from './index.js';

// Get a room from database
export async function GetRoom(code) {
    const roomRef = doc(db, 'rooms', code.toUpperCase());
    const roomSnapshot = await getDoc(roomRef);
    if (roomSnapshot.exists()) {
        return roomSnapshot.data();
    } else {
        return {};
    }
}