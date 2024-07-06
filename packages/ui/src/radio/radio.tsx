import { Flex, styled } from "@ui-ware/system/jsx";
import {
	type RadioProps as RACRadioProps,
	Radio as RACRadio,
	RadioGroup as RACRadioGroup,
	type RadioGroupProps as RACRadioGroupProps,
} from "react-aria-components";
import { Label } from "../label";

const RadioCircle = styled("div", {
	base: {
		transition: "all 60ms ease-in",
		top: 0,
		left: 0,
		display: "block",
		borderRadius: "50%",
		height: "18px",
		width: "18px",
		border: "1px solid {colors.zinc.400}",
		background: "linear-gradient(180deg, white, {colors.zinc.50})",
		boxShadow: "{colors.zinc.100} 0px 0px 1px 0px inset",
		justifyContent: "center",
		alignItems: "center",
		cursor: "pointer",
		position: "relative",

		// This is centered for 18px container with 8px dot
		_before: {
			transition: "all 60ms ease-in",
			position: "absolute",
			content: "''",
			borderRadius: "50%",
			display: "flex",
			height: "8px",
			width: "8px",
			top: "4px",
			left: "4px",
			background: "linear-gradient(180deg, white, {colors.zinc.50})",
			opacity: 0,
		},
	},

	variants: {
		pressed: { true: {}, false: {} },
		checked: {
			true: {
				background:
					"linear-gradient(180deg, {colors.blue.400}, {colors.blue.500})",
				borderColor: "{colors.blue.600}",
				boxShadow: "#829FF5 0px 0px 1px 0px inset",

				_hover: {
					background:
						"linear-gradient(180deg, {colors.blue.500}, {colors.blue.600})",
					borderColor: "{colors.blue.700}",
					boxShadow: "#829FF5 0px 0px 1px 0px inset",
				},
				_before: {
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
					boxShadow: "{colors.zinc.200} 1.25px 1.25px 1px -1px inset",
					background:
						"linear-gradient(180deg, {colors.zinc.50}, {colors.zinc.50})",
					borderColor: "{colors.zinc.500}",
				},
			},
		},
		{
			checked: false,
			pressed: true,
			css: {
				boxShadow: "{colors.zinc.300} 1.25px 1.25px 1px -1px inset",
				background:
					"linear-gradient(180deg, {colors.zinc.100}, {colors.zinc.100})",
				borderColor: "{colors.blue.600}",
			},
		},
		{
			checked: true,
			pressed: true,
			css: {
				_hover: {
					boxShadow: "{colors.blue.500} 0px 0px 1px 0px inset",
				},
			},
		},
	],
});

type RadioGroupProps = RACRadioGroupProps & { label: string };
const RadioGroup = (props: RadioGroupProps) => {
	const { children, label, isRequired, ...rest } = props;
	return (
		<RACRadioGroup {...rest} isRequired={isRequired}>
			<Flex gap="4px" flexDirection="column" alignItems="flex-start">
				<Label isRequired={isRequired}>{label}</Label>
				{children}
			</Flex>
		</RACRadioGroup>
	);
};

type RadioProps = RACRadioProps & { label: string };
const Radio = (props: RadioProps) => {
	const { label, children, ...rest } = props;
	return (
		<RACRadio {...rest}>
			{({ isDisabled, isSelected, isPressed, isFocused }) => (
				<Flex gap="4px" alignItems="flex-start">
					<RadioCircle
						checked={isSelected}
						disabled={isDisabled}
						pressed={isPressed}
						focused={isFocused}
					/>
					{/* TODO: render props */}
					<Label>{typeof children !== "function" && children}</Label>
				</Flex>
			)}
		</RACRadio>
	);
};

export { Radio, type RadioProps, RadioGroup, type RadioGroupProps };
