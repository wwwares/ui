import {
	Button as RACButton,
	type ButtonProps as RACButtonProps,
} from "react-aria-components";
import { button, buttonContent, type ButtonVariants } from "@wwwares/ui-system";
import clsx from "clsx";

type ButtonProps = RACButtonProps & ButtonVariants;

function Button(props: ButtonProps) {
	const recipeClass = button({
		intent: props.intent,
		variant: props.variant,
	});
	return (
		<RACButton {...props} className={clsx(recipeClass, "wwware-button")}>
			<span className={buttonContent}>
				{typeof props.children !== "function" && props.children}
			</span>
		</RACButton>
	);
}

export { Button };
