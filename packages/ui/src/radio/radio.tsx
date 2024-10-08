import { Flex, styled } from "@wwwares/ui-system/jsx";
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
		justifyContent: "center",
		alignItems: "center",
		cursor: "pointer",
		position: "relative",
		border: "interactive.neutral.default",
		boxShadow: "ridge.interactive.neutral.default",
		background: "bg.ridge.interactive.neutral.default",

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
			background: "bg.ridge.interactive.neutral.reversed",
			opacity: 0,
		},
	},

	variants: {
		pressed: { true: {}, false: {} },
		checked: {
			true: {
				border: "interactive.primary.default",
				boxShadow: "ridge.interactive.primary.default",
				background: "bg.ridge.interactive.primary.default",

				_groupHover: {
					border: "interactive.primary.hover",
					boxShadow: "ridge.interactive.primary.hover",
					background: "bg.ridge.interactive.primary.hover",
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
				_groupHover: {
					boxShadow: "ridge.interactive.neutral.hover",
					border: "interactive.neutral.hover",
					background: "bg.ridge.interactive.neutral.hover",
				},
			},
		},
		{
			checked: false,
			pressed: true,
			css: {
				boxShadow: "ridge.interactive.neutral.pressed",
				border: "interactive.primary.default",
				background: "bg.ridge.interactive.neutral.pressed",
			},
		},
		{
			checked: true,
			pressed: true,
			css: {
				_groupHover: {
					boxShadow: "ridge.interactive.primary.pressed",
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
			<Flex gap="8px" flexDirection="column" alignItems="flex-start">
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
				<Flex gap="8px" alignItems="flex-start" className="group">
					<RadioCircle
						checked={isSelected}
						disabled={isDisabled}
						pressed={isPressed}
						focused={isFocused}
					/>
					{/* TODO: render props */}
					<Label isPlain>{typeof children !== "function" && children}</Label>
				</Flex>
			)}
		</RACRadio>
	);
};

export { Radio, type RadioProps, RadioGroup, type RadioGroupProps };
