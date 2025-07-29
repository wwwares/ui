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

const TextField = ({ isRequired, label, ...props }: TextFieldProps) => {
	const cls = textFieldRecipe();
	return (
		<RACTextField {...props} style={{ width: "100%" }}>
			<Label isRequired={isRequired} content={label} style={{ width: "100%" }}>
				<RACInput className={cls} />
			</Label>
		</RACTextField>
	);
};

export { TextField, type TextFieldProps };
