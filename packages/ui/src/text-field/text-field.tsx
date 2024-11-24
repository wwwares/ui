import { styled } from "@wwwares/ui-system/jsx";
import {
	TextField as RACTextField,
	Input as RACInput,
	type TextFieldProps as RACTextFieldProps,
} from "react-aria-components";
import { Label } from "../label";

const StyledInput = styled(RACInput, {
	base: {
		borderRadius: "sm",
		transition: "all 150ms cubic-bezier(0.075, 0.82, 0.165, 1)",
		border: "interactive.neutral.default",
		background: "bg.well.interactive.neutral.default",
		boxShadow: "well.interactive.neutral.default",
		padding: "2px 4px 2px 12px",
		minHeight: "32px",
		outline: "none",
		fontSize: "sm",
		lineHeight: "1.25rem",
		width: "100%",

		_hover: {
			border: "interactive.neutral.hover",
			boxShadow: "well.interactive.neutral.hover",
		},

		_active: {
			border: "interactive.neutral.pressed !important",
			boxShadow: "well.interactive.neutral.pressed !important",
			background: "bg.well.interactive.neutral.pressed",
		},

		_focusVisible: {
			border: "interactive.neutral.pressed !important",
			background: "bg.well.interactive.neutral.pressed",
			boxShadow: "well.interactive.neutral.pressed !important",
		},
	},
});

type TextFieldProps = { label: string } & RACTextFieldProps;

const TextField = (props: TextFieldProps) => {
	return (
		<Label
			isRequired={props.isRequired}
			content={props.label}
			style={{ width: "100%" }}
		>
			<RACTextField {...props} style={{ width: "100%" }}>
				<StyledInput />
			</RACTextField>
		</Label>
	);
};

export { TextField, type TextFieldProps };
