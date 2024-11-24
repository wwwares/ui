import { Box, Flex, styled } from "@wwwares/ui-system/jsx";
import { useId, type HTMLProps } from "react";
import { cx } from "@wwwares/ui-system/css";
import { Label } from "../label";

const SelectBackdrop = styled("div", {
	base: {
		position: "absolute",
		zIndex: 10,
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		borderRadius: "sm",
		transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
		border: "interactive.neutral.default",
		boxShadow: "ridge.interactive.neutral.default",
		background: "bg.ridge.interactive.neutral.default",

		_peerHover: {
			boxShadow: "ridge.interactive.neutral.hover",
			border: "interactive.neutral.hover",
			background: "bg.ridge.interactive.neutral.hover",
		},

		// Don't see a need for this atm
		_peerActive: {},

		_peerFocus: {
			boxShadow: "ridge.interactive.neutral.pressed !important",
			border: "interactive.neutral.pressed",
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
		fontSize: "sm",
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

type SelectOption = {
	value: string;
	label: string;
};

type SelectProps = HTMLProps<HTMLSelectElement> & {
	children?: never;
	options: SelectOption[];
	label: string;
	isRequired?: boolean;
};

function Select(props: SelectProps) {
	const { options, isRequired, label, ...rest } = props;
	const selectId = useId();

	const cn = cx(rest.className, "peer");

	const displayLabel = options.find(
		(option) => option.value === props.value,
	)?.label;

	return (
		// Full container width hack?
		<Label isRequired={isRequired} content={label}>
			<Flex width="100%" flexDirection="column">
				<Box position="relative">
					<SelectEl {...rest} className={cn} id={selectId}>
						{options.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</SelectEl>
					<SelectContent>
						<SelectOption>{displayLabel}</SelectOption>
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
		</Label>
	);
}

export { Select };
