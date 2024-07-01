import {
	Button as RACButton,
	type ButtonProps as RACButtonProps,
} from "react-aria-components";
import { ButtonRecipe } from "./button.recipe";

type ButtonProps = RACButtonProps;

function Button(props: ButtonProps) {
	// return <StyledButton />;
	const recipeClass = ButtonRecipe({
		intent: props.intent,
		variant: props.variant,
	});
	return <RACButton {...props} className={recipeClass} />;
}

export { Button };
