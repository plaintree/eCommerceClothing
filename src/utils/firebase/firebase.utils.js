import {initializeApp} from "firebase/app";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDZuH2YOkMTHLm_02gXjwasz863u-5WlRw",
	authDomain: "react-database-f5b32.firebaseapp.com",
	databaseURL: "https://react-database-f5b32-default-rtdb.firebaseio.com",
	projectId: "react-database-f5b32",
	storageBucket: "react-database-f5b32.appspot.com",
	messagingSenderId: "408104211705",
	appId: "1:408104211705:web:87256eb4d83a59e5c7fe28",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Authentication
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
	return signInWithPopup(auth, googleProvider);
};
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);

//Firestore database
export const db = getFirestore();

export const createUserDoc = async (userAuth, additionalInfo = {}) => {
	if (!userAuth) return;
	const userDocRef = doc(db, "users", userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const {displayName, email} = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userDocRef, {displayName, email, createdAt, ...additionalInfo});
		} catch (error) {
			console.log("Error creating document", error.message);
		}
	}
	return userDocRef;
};

export const createNewUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};
