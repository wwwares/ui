import {
	Button as RACButton,
	type ButtonProps as RACButtonProps,
} from "react-aria-components";
import {
	buttonRecipe,
	type ButtonRecipeVariantProps,
} from "@ui-ware/system/recipes";

type ButtonProps = RACButtonProps & ButtonRecipeVariantProps;

function Button(props: ButtonProps) {
	const recipeClass = buttonRecipe({
		intent: props.intent,
		variant: props.variant,
	});
	return <RACButton {...props} className={recipeClass} />;
}

export { Button };
