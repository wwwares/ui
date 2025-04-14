// import { styled } from "@wwwares/ui-system/jsx";
import { textFieldRecipe } from "@wwwares/ui-system/recipes";
import {
	TextField as RACTextField,
	Input as RACInput,
	type TextFieldProps as RACTextFieldProps,
} from "react-aria-components";
import { Label } from "../label";

// const StyledInput = styled(RACInput, textFieldRecipe);

type TextFieldProps = { label: string } & RACTextFieldProps;

const TextField = (props: TextFieldProps) => {
	const cls = textFieldRecipe();
	return (
		<Label
			isRequired={props.isRequired}
			content={props.label}
			style={{ width: "100%" }}
		>
			<RACTextField {...props} style={{ width: "100%" }}>
				<RACInput className={cls} />
			</RACTextField>
		</Label>
	);
};

export { TextField, type TextFieldProps };
