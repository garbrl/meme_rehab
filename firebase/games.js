import { doc, getDoc } from 'firebase/firestore';
import { db } from './index.js';

// Get a game from database
export async function GetGame(code) {
    const gameRef = doc(db, 'games', code);
    const gameSnapshot = await getDoc(gameRef);
    if (gameSnapshot.exists()) {
        return gameSnapshot.data();
    } else {
        return {};
    }
}