import { Flex, styled } from "@wwwares/ui-system/jsx";
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
		border: "interactive.neutral.default",
		background: "bg.well.interactive.neutral.default",
		boxShadow: "well.interactive.neutral.default",
		padding: "2px 4px 2px 12px",
		minHeight: "32px",
		outline: "none",
		fontSize: "sm",
		lineHeight: "1.25rem",

		_hover: {
			border: "interactive.neutral.hover",
			boxShadow: "well.interactive.neutral.hover",
		},

		_active: {
			border: "interactive.primary.default !important",
			boxShadow: "well.interactive.neutral.pressed !important",
			background: "bg.well.interactive.neutral.pressed",
		},

		_focus: {
			background: "bg.well.interactive.neutral.pressed",
			boxShadow: "well.interactive.neutral.pressed !important",
			border: "interactive.primary.default !important",
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
