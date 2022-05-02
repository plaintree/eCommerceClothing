import {useState} from "react";
import {
	createNewUserWithEmailAndPassword,
	createUserDoc,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const {displayName, email, password, confirmPassword} = formFields;

	const submitHandler = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert(`Password must be matched`);
			return;
		}
		try {
			const {user} = createNewUserWithEmailAndPassword(email, password);
			await createUserDoc(user, {displayName});
			setFormFields(defaultFormFields);
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("Email already in use");
			} else {
				console.log(`Register failed`, error);
			}
		}
	};

	const changeHandler = (event) => {
		const {name, value} = event.target;
		setFormFields({...formFields, [name]: value});
	};

	// const resetHandler = ()=>{
	//     setFormFields(defaultFormFields);
	// }
	return (
		<div className='sign-up-container'>
			<h2>Don't have a account?</h2>
			<span>Sign up with email and password</span>
			<form onSubmit={submitHandler}>
				<FormInput
					label='Display Name'
					type='text'
					name='displayName'
					value={displayName}
					onChange={changeHandler}
					required
				/>

				<FormInput
					label='Email'
					type='email'
					name='email'
					value={email}
					onChange={changeHandler}
					required
				/>

				<FormInput
					label='Password'
					type='password'
					name='password'
					value={password}
					onChange={changeHandler}
					required
				/>

				<FormInput
					label='Confirm Password'
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={changeHandler}
					required
				/>
				<Button type='submit'>Sign Up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
