import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     // const uid = user.uid;
//     setCurrentUser({...user});
//     console.log("auth updated uid: ", user.uid);
//   } else {
//     // User is signed out
//     // ...
//     console.log("user is signed out");
//   }
// });

export function CurrentUser() {
    const [currentUser, setCurrentUser] = useState({});

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        setCurrentUser({...user});
        console.log("auth updated uid: ", user.uid);
    } else {
        // User is signed out
        // ...
        console.log("user is signed out");
    }
    });
    return currentUser;
}