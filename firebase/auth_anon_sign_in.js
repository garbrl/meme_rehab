import { getAuth, signInAnonymously } from "firebase/auth";

// const auth = getAuth();
// signInAnonymously(auth)
//   .then(() => {
//     // Signed in..
//     console.log("apparently signed in");
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(error.code);
//     console.log(error.message);
//   });

export async function AnonSignUp() {
    const auth = getAuth();
    signInAnonymously(auth)
    .then(() => {
        // Signed in..
        console.log("apparently signed in");
        return true;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.code);
        console.log(error.message);
        return false;
    });
}