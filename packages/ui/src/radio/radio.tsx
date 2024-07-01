import { styled } from "@ui-ware/system/jsx";
import {
	type RadioProps as RACRadioProps,
	Radio as RACRadio,
	RadioGroup as RACRadioGroup,
} from "react-aria-components";

const RadioCircle = styled("div", {
	base: {
		transition: "all 60ms ease-in",
		top: 0,
		left: 0,
		display: "block",
		borderRadius: "50%",
		height: "18px",
		width: "18px",
		border: "1px solid {colors.slate.400}",
		background: "linear-gradient(180deg, white, {colors.slate.50})",
		boxShadow: "{colors.slate.100} 0px 0px 1px 0px inset",
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
			background: "linear-gradient(180deg, white, {colors.slate.50})",
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
	},
	compoundVariants: [
		{
			checked: false,
			pressed: false,
			css: {
				_hover: {
					boxShadow: "{colors.slate.200} 1.25px 1.25px 1px -1px inset",
					background:
						"linear-gradient(180deg, {colors.slate.50}, {colors.slate.50})",
					borderColor: "{colors.slate.500}",
				},
			},
		},
		{
			checked: false,
			pressed: true,
			css: {
				boxShadow: "{colors.slate.300} 1.25px 1.25px 1px -1px inset",
				background:
					"linear-gradient(180deg, {colors.slate.100}, {colors.slate.100})",
				borderColor: "{colors.slate.400}",
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

type RadioProps = RACRadioProps;

const Radio = (props: RadioProps) => (
	<RACRadio {...props}>
		{({ isDisabled, isSelected, isPressed }) => (
			<>
				<RadioCircle
					checked={isSelected}
					disabled={isDisabled}
					pressed={isPressed}
				/>
				{props.children}
			</>
		)}
	</RACRadio>
);

export { Radio, type RadioProps, RACRadioGroup as RadioGroup };
