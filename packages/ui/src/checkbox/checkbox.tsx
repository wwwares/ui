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
			border: "1px solid {colors.zinc.400}",
			background: "linear-gradient(180deg, white, {colors.zinc.50})",
			boxShadow: "{colors.zinc.100} 0px 0px 1px 0px inset",
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
					background:
						"linear-gradient(180deg, {colors.blue.400}, {colors.blue.500})",
					borderColor: "{colors.blue.600}",
					boxShadow: "#829FF5 0px 0px 1px 0px inset",
				},
				_hover: {
					_before: {
						background:
							"linear-gradient(180deg, {colors.blue.500}, {colors.blue.600})",
						borderColor: "{colors.blue.700}",
						boxShadow: "#829FF5 0px 0px 1px 0px inset",
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
						boxShadow: "{colors.zinc.200} 1.25px 1.25px 1px -1px inset",
						// background: "linear-gradient(180deg, white, {colors.zinc.100})",
						// background: "{colors.zinc.50}",
						background:
							"linear-gradient(180deg, {colors.zinc.50}, {colors.zinc.50})",
						borderColor: "{colors.zinc.500}",
					},
				},
			},
		},
		{
			checked: false,
			pressed: true,
			css: {
				_before: {
					boxShadow: "{colors.zinc.300} 1.25px 1.25px 1px -1px inset",
					background:
						"linear-gradient(180deg, {colors.zinc.100}, {colors.zinc.100})",
					borderColor: "{colors.blue.600}",
				},
			},
		},
		{
			checked: true,
			pressed: true,
			css: {
				_hover: {
					_before: {
						boxShadow: "{colors.blue.500} 0px 0px 1px 0px inset",
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
