import { styled } from "@ui-ware/system/jsx";
import {
	TextField as RACTextField,
	Input as RACInput,
	InputProps as RACInputProps,
	type TextFieldProps as RACTextFieldProps,
} from "react-aria-components";

const StyledInput = styled(RACInput, {
	base: {
		borderRadius: "4px",
		transition: "all 60ms ease-in",
		// border: "1px solid {colors.slate.200}",
		border: "1px solid {colors.slate.400}",
		// background: "linear-gradient(180deg, white, {colors.slate.50})",
		// boxShadow: "{colors.slate.100} 0px 0px 1px 0px inset",
		background: "transparent",
		boxShadow: "{colors.slate.300} 0px 0.0625rem 0.125rem inset",
		padding: "2px 4px 2px 12px",
		minHeight: "32px",
		outline: "none",
		fontSize: "sm",
		lineHeight: "1.25rem",

		_hover: {
			// boxShadow: "{colors.slate.200} 1.25px 1.25px 1px -1px inset",
			// boxShadow: "{colors.slate.400} 0px 0.0625rem 0.125rem inset",
			// background: "linear-gradient(180deg, white, {colors.slate.50})",
			borderColor: "{colors.slate.500}",
		},

		_active: {
			// boxShadow: "{colors.slate.300} 1.25px 1.25px 1px -1px inset !important",
			// background:
			// 	"linear-gradient(180deg, {colors.slate.100}, {colors.slate.100}) !important",
			borderColor: "{colors.blue.600} !important",
		},

		_focus: {
			// boxShadow: "{colors.slate.300} 1.25px 1.25px 1px -1px inset !important",
			// background:
			// 	"linear-gradient(180deg, {colors.slate.50}, {colors.slate.50}) !important",
			borderColor: "{colors.blue.600} !important",
		},
	},
});

type TextFieldProps = {} & RACTextFieldProps;

const TextField = (props: TextFieldProps) => {
	return (
		<RACTextField {...props}>
			<StyledInput />
		</RACTextField>
	);
};

export { TextField, type TextFieldProps };
