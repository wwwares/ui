import {
	Button as RACButton,
	type ButtonProps as RACButtonProps,
} from "react-aria-components";
import { ButtonRecipe, type ButtonRecipeProps } from "./button.recipe";

type ButtonProps = RACButtonProps & ButtonRecipeProps;

function Button(props: ButtonProps) {
	const recipeClass = ButtonRecipe({
		intent: props.intent,
		variant: props.variant,
	});
	return <RACButton {...props} className={recipeClass} />;
}

export { Button };
