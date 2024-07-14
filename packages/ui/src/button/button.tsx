import {
	Button as RACButton,
	type ButtonProps as RACButtonProps,
} from "react-aria-components";
import {
	buttonRecipe,
	type ButtonRecipeVariantProps,
} from "@wwwares/ui-system/recipes";

type ButtonProps = RACButtonProps & ButtonRecipeVariantProps;

function Button(props: ButtonProps) {
	const recipeClass = buttonRecipe({
		intent: props.intent,
		variant: props.variant,
	});
	return (
		<RACButton {...props} className={recipeClass}>
			<span style={{ lineHeight: "1rem" }}>
				{typeof props.children !== "function" && props.children}
			</span>
		</RACButton>
	);
}

export { Button };
