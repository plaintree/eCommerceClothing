import {
	signInWithGooglePopup,
	createUserDoc,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
	const logGoogleUser = async () => {
		const {user} = await signInWithGooglePopup();
		const userDocRef = await createUserDoc(user);
	};
	return (
		<>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>Sign in with Google</button>
		</>
	);
};

export default SignIn;
