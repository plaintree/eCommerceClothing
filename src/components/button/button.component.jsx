import "./button.styles.scss";

const buttonTypeClasses = {
	google: "google-sign-in",
	inverted: "inverted",
};

const Button = (props) => {
	return (
		<button
			className={`button-container ${buttonTypeClasses[props.buttontype]}`}
			{...props}>
			{props.children}
		</button>
	);
};

export default Button;
