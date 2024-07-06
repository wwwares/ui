import { Box, Flex, styled } from "@ui-ware/system/jsx";
import { useId, type HTMLProps } from "react";
import { cx } from "@ui-ware/system/css";
import { Label } from "../label";

const SelectBackdrop = styled("div", {
	base: {
		position: "absolute",
		zIndex: 10,
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		borderRadius: "4px",
		transition: "all 60ms ease-in",
		border: "1px solid {colors.zinc.400}",
		background: "linear-gradient(180deg, white, {colors.zinc.50})",
		boxShadow: "{colors.zinc.100} 0px 0px 1px 0px inset",

		// This sucks with !important

		_peerHover: {
			boxShadow: "{colors.zinc.200} 1.25px 1.25px 1px -1px inset",
			background: "linear-gradient(180deg, {colors.zinc.50}, {colors.zinc.50})",
			borderColor: "{colors.zinc.500}",
		},

		_peerActive: {
			boxShadow: "{colors.zinc.300} 1.25px 1.25px 1px -1px inset !important",
			background:
				"linear-gradient(180deg, {colors.zinc.100}, {colors.zinc.100}) !important",
			borderColor: "{colors.blue.600} !important",
		},

		_peerFocus: {
			boxShadow: "{colors.zinc.300} 1.25px 1.25px 1px -1px inset !important",
			background:
				"linear-gradient(180deg, {colors.zinc.100}, {colors.zinc.100}) !important",
			borderColor: "{colors.blue.600} !important",
			// outline: "dotted thin",
		},
	},
});

const SelectContent = styled("div", {
	base: {
		position: "relative",
		border: "none",
		display: "flex",
		alignItems: "center",
		width: "100%",
		minHeight: "32px",
		padding: "2px 4px 2px 6px",
		zIndex: 20,
	},
});

const SelectOption = styled("span", {
	base: {
		flex: "1 1",
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
	},
});

const SelectEl = styled("select", {
	base: {
		appearance: "none",
		border: "none",
		zIndex: 30,
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		margin: 0,
		opacity: 0,
	},
});

const SelectIcon = styled("div", {
	base: {
		height: "20px",
		width: "20px",
		fill: "zinc.600",
	},
});

// @ts-ignore
const SelectOld = styled("select", {
	base: {
		padding: "4px 8px",
		appearance: "none",
		transition: "all 60ms ease-in",
		borderRadius: "4px",
		display: "flex",
		border: "1px solid {colors.zinc.200}",
		background: "linear-gradient(180deg, white, {colors.zinc.50})",
		boxShadow: "{colors.zinc.100} 0px 0px 1px 0px inset",

		_active: {
			boxShadow: "{colors.zinc.300} 1.25px 1.25px 1px -1px inset !important",
			background: "{colors.zinc.100} !important",
			borderColor: "{colors.blue.600}",
		},

		_focus: {
			boxShadow: "{colors.zinc.300} 1.25px 1.25px 1px -1px inset !important",
			background: "{colors.zinc.100} !important",
			borderColor: "{colors.blue.600}",
		},

		_hover: {
			"&:not(:focus)": {
				boxShadow: "{colors.zinc.200} 1.25px 1.25px 1px -1px inset",
				background: "{colors.zinc.50}",
				borderColor: "{colors.zinc.300}",
			},
		},

		_before: {
			transition: "all 60ms ease-in",
			position: "absolute",
			content: "''",
			borderRadius: "4px",
			display: "flex",
			height: "18px",
			width: "18px",
			border: "1px solid {colors.zinc.200}",
			background: "linear-gradient(180deg, white, {colors.zinc.50})",
			boxShadow: "{colors.zinc.100} 0px 0px 1px 0px inset",
		},

		_disabled: {
			opacity: "0.5",
			cursor: "auto",
		},
	},

	variants: {
		invalid: {
			true: {
				borderColor: "{colors.red.500}",
			},
		},
	},
});

type SelectOption = {
	value: string;
	label: string;
};

type SelectProps = HTMLProps<HTMLSelectElement> & {
	children: never;
	options: SelectOption[];
	label: string;
	isRequired?: boolean;
};

function Select(props: SelectProps) {
	const { options, isRequired, label, ...rest } = props;
	const selectId = useId();

	// @ts-ignore
	const cn = cx(rest.className, "peer");

	return (
		// Full container width hack?
		<Flex width="100%" flexDirection="column">
			<Label isRequired={isRequired} htmlFor={selectId}>
				{label}
			</Label>
			<Box position="relative">
				<SelectEl {...rest} className={"peer"} id={selectId}>
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</SelectEl>
				<SelectContent>
					<SelectOption>{props.value}</SelectOption>
					<SelectIcon>
						<svg viewBox="0 0 20 20" focusable={false} aria-hidden="true">
							<path d="M10.884 4.323a1.25 1.25 0 0 0-1.768 0l-2.646 2.647a.75.75 0 0 0 1.06 1.06l2.47-2.47 2.47 2.47a.75.75 0 1 0 1.06-1.06l-2.646-2.647Z" />
							<path d="m13.53 13.03-2.646 2.647a1.25 1.25 0 0 1-1.768 0l-2.646-2.647a.75.75 0 0 1 1.06-1.06l2.47 2.47 2.47-2.47a.75.75 0 0 1 1.06 1.06Z" />
						</svg>
					</SelectIcon>
				</SelectContent>
				<SelectBackdrop />
			</Box>
		</Flex>
	);
}

export { Select };
