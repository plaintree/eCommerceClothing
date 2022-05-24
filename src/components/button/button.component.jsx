import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from "./button.styles";

export const buttonTypeClasses = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttontype = buttonTypeClasses.base) =>
  ({
    [buttonTypeClasses.base]: BaseButton,
    [buttonTypeClasses.google]: GoogleSignInButton,
    [buttonTypeClasses.inverted]: InvertedButton,
  }[buttontype]);

const Button = (props) => {
  const CustomButton = getButton(props.buttontype);
  return (
    <CustomButton disabled={props.isLoading} {...props}>
      {props.isLoading ? <ButtonSpinner /> : props.children}
    </CustomButton>
  );
};

export default Button;
