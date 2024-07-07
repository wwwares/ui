import {
	Checkbox as RACCheckbox,
	type CheckboxProps as RACCheckboxProps,
} from "react-aria-components";
import { Flex, styled } from "@ui-ware/system/jsx";
import { Label } from "../label";

const CheckIcon = styled("div", {
	base: {
		position: "relative",
		cursor: "pointer",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "black",
		height: "18px",
		width: "18px",

		_focus: {
			outline: "dotted thin",
		},

		_before: {
			transition: "all 60ms ease-in",
			position: "absolute",
			content: "''",
			borderRadius: "4px",
			display: "flex",
			height: "18px",
			width: "18px",
			border: "neutral.default",
			boxShadow: "ridge.interactive.neutral.default",
			background: "bg.neutral.default",
		},
		_after: {
			position: "absolute",
			top: "4px",
			content: "''",
			display: "flex",
			transform: "rotate(-45deg) scale(.7)",
			height: "8px",
			width: "16px",
			borderBottom: "white solid 4px",
			borderLeft: "white solid 4px",
			opacity: 0,
			cursor: "inherit",
		},
	},
	variants: {
		pressed: { true: {}, false: {} },
		checked: {
			true: {
				_before: {
					border: "primary.default",
					boxShadow: "ridge.interactive.primary.default",
					background: "bg.primary.default",
				},
				_hover: {
					_before: {
						border: "primary.hover",
						boxShadow: "ridge.interactive.primary.hover",
						background: "bg.primary.hover",
					},
				},
				_after: {
					opacity: 1,
				},
			},
		},
		disabled: {
			true: {
				opacity: 0.5,
				cursor: "not-allowed",
			},
		},
		focused: {
			true: {
				outline: "dotted thin",
			},
		},
	},
	compoundVariants: [
		{
			checked: false,
			pressed: false,
			css: {
				_hover: {
					_before: {
						boxShadow: "ridge.interactive.neutral.hover",
						border: "neutral.hover",
						background: "bg.neutral.hover",
					},
				},
			},
		},
		{
			checked: false,
			pressed: true,
			css: {
				_before: {
					boxShadow: "ridge.interactive.neutral.pressed",
					border: "primary.default",
					background: "bg.neutral.pressed",
				},
			},
		},
		{
			checked: true,
			pressed: true,
			css: {
				_hover: {
					_before: {
						boxShadow: "ridge.interactive.primary.pressed",
					},
				},
			},
		},
	],
});

type CheckboxProps = RACCheckboxProps & { label: string };

const Checkbox = (props: CheckboxProps) => {
	const { label, isRequired } = props;
	return (
		<RACCheckbox {...props} isRequired={isRequired}>
			{({ isSelected, isDisabled, isPressed, isFocused }) => (
				<Flex gap="4px" flexDirection="row" alignItems="flex-start">
					<CheckIcon
						checked={isSelected}
						disabled={isDisabled}
						pressed={isPressed}
						focused={isFocused}
					/>
					{label && <Label isRequired={isRequired}>{label}</Label>}
				</Flex>
			)}
		</RACCheckbox>
	);
};

export { Checkbox };
