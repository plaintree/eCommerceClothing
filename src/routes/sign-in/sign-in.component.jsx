import {
	// auth,
	// signInWithGoogleRedirect,
	signInWithGooglePopup,
	createUserDoc,
	createNewUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
// import {useEffect} from "react";
// import {getRedirectResult} from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const response = await getRedirectResult(auth);
	// 		if (response) {
	// 			const userDocRef = await createUserDoc(response.user);
	// 		}
	// 	};
	// 	fetchData();
	// }, []);
	const logGoogleUser = async () => {
		const {user} = await signInWithGooglePopup();
		const userDocRef = await createUserDoc(user);
	};

	return (
		<>
			<h1>Sign In Page</h1>

			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
			<SignUpForm />
		</>
	);
};

export default SignIn;
