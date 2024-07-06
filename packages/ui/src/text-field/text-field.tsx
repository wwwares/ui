import { Flex, styled } from "@ui-ware/system/jsx";
import {
	TextField as RACTextField,
	Input as RACInput,
	type TextFieldProps as RACTextFieldProps,
} from "react-aria-components";
import { Label } from "../label";

const StyledInput = styled(RACInput, {
	base: {
		borderRadius: "4px",
		transition: "all 60ms ease-in",
		// border: "1px solid {colors.zinc.200}",
		border: "1px solid {colors.zinc.400}",
		// background: "linear-gradient(180deg, white, {colors.zinc.50})",
		// boxShadow: "{colors.zinc.100} 0px 0px 1px 0px inset",
		background: "zinc.50",
		boxShadow: "{colors.zinc.300} 0px 1px 3px inset",
		padding: "2px 4px 2px 12px",
		minHeight: "32px",
		outline: "none",
		fontSize: "sm",
		lineHeight: "1.25rem",

		_hover: {
			// boxShadow: "{colors.zinc.200} 1.25px 1.25px 1px -1px inset",
			// boxShadow: "{colors.zinc.400} 0px 0.0625rem 0.125rem inset",
			// background: "linear-gradient(180deg, white, {colors.zinc.50})",
			borderColor: "{colors.zinc.500}",
			boxShadow: "{colors.zinc.300} 0px 1px 5px inset",
		},

		_active: {
			// boxShadow: "{colors.zinc.300} 1.25px 1.25px 1px -1px inset !important",
			// background:
			// 	"linear-gradient(180deg, {colors.zinc.100}, {colors.zinc.100}) !important",
			borderColor: "{colors.blue.600} !important",
			boxShadow: "{colors.zinc.300} 0px 1px 3px inset",
			// boxShadow: "{colors.zinc.400} 0px 1px 4px inset",
			background: "white",
		},

		_focus: {
			// boxShadow: "{colors.zinc.300} 1.25px 1.25px 1px -1px inset !important",
			// background:
			// 	"linear-gradient(180deg, {colors.zinc.50}, {colors.zinc.50}) !important",
			background: "white",
			boxShadow: "{colors.zinc.300} 0px 1px 3px inset",
			borderColor: "{colors.blue.600} !important",
		},
	},
});

type TextFieldProps = { label: string } & RACTextFieldProps;

const TextField = (props: TextFieldProps) => {
	return (
		<RACTextField {...props}>
			<Flex gap="2px" flexDirection="column">
				{props.label && (
					<Label isRequired={props.isRequired}>{props.label}</Label>
				)}
				<StyledInput />
			</Flex>
		</RACTextField>
	);
};

export { TextField, type TextFieldProps };
