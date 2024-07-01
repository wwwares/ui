import { Checkbox as RACCheckbox } from "react-aria-components";
import { styled } from "@ui-ware/system/jsx";

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
			border: "1px solid {colors.slate.400}",
			background: "linear-gradient(180deg, white, {colors.slate.50})",
			boxShadow: "{colors.slate.100} 0px 0px 1px 0px inset",
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
						boxShadow: "{colors.slate.200} 1.25px 1.25px 1px -1px inset",
						// background: "linear-gradient(180deg, white, {colors.slate.100})",
						// background: "{colors.slate.50}",
						background:
							"linear-gradient(180deg, {colors.slate.50}, {colors.slate.50})",
						borderColor: "{colors.slate.500}",
					},
				},
			},
		},
		{
			checked: false,
			pressed: true,
			css: {
				_before: {
					boxShadow: "{colors.slate.300} 1.25px 1.25px 1px -1px inset",
					background:
						"linear-gradient(180deg, {colors.slate.100}, {colors.slate.100})",
					borderColor: "{colors.slate.400}",
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

// @ts-expect-error
const Checkbox = (props) => (
	<RACCheckbox {...props} position="relative">
		{({ isSelected, isDisabled, isPressed, isFocused }) => (
			<CheckIcon
				checked={isSelected}
				disabled={isDisabled}
				pressed={isPressed}
				focused={isFocused}
			/>
		)}
	</RACCheckbox>
);

export { Checkbox };
