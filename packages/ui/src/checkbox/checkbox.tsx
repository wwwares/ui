import {
	Checkbox as RACCheckbox,
	type CheckboxProps as RACCheckboxProps,
} from "react-aria-components";
import { Flex, styled } from "@wwwares/system/jsx";
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
			border: "interactive.neutral.default",
			boxShadow: "ridge.interactive.neutral.default",
			background: "bg.ridge.interactive.neutral.default",
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
					border: "interactive.primary.default",
					boxShadow: "ridge.interactive.primary.default",
					background: "bg.ridge.interactive.primary.default",
				},

				_groupHover: {
					_before: {
						border: "interactive.primary.hover",
						boxShadow: "ridge.interactive.primary.hover",
						background: "bg.ridge.interactive.primary.hover",
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
				_groupHover: {
					_before: {
						boxShadow: "ridge.interactive.neutral.hover",
						border: "interactive.neutral.hover",
						background: "bg.ridge.interactive.neutral.hover",
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
					border: "interactive.primary.default",
					background: "bg.ridge.interactive.neutral.pressed",
				},
			},
		},
		{
			checked: true,
			pressed: true,
			css: {
				_groupHover: {
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
				// reverse and align to the end (start when reversed) to work around peer needing to be first in dom
				// the <input /> is hidden and CheckIcon takes it's place so the checkbox obtains hover when the label is hovered
				<Flex gap="8px" flexDirection="row" className="group">
					<CheckIcon
						checked={isSelected}
						disabled={isDisabled}
						pressed={isPressed}
						focused={isFocused}
					/>
					{label && (
						<Label isRequired={isRequired} isPlain>
							{label}
						</Label>
					)}
				</Flex>
			)}
		</RACCheckbox>
	);
};

export { Checkbox };
