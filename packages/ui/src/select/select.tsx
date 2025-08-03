// import { Box, Flex, styled } from "@wwwares/ui-system/jsx";
import { useId, type HTMLProps } from "react";
import { Label } from "../label";
import clsx from "clsx";
import { selectStyles } from "@wwwares/ui-system";

import { styled } from "../styled";

const Box = styled("div");

const SelectBackdrop = styled("div", selectStyles.selectBackdrop);

const SelectContent = styled("div", selectStyles.selectContent);

const SelectOption = styled("span", selectStyles.selectOption);

const SelectEl = styled("select", selectStyles.selectEl);

const SelectIcon = styled("div", selectStyles.selectIcon);

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

	const cn = clsx(rest.className, "peer");

	const displayLabel = options.find(
		(option) => option.value === props.value,
	)?.label;

	return (
		// Full container width hack?
		<Label isRequired={isRequired} content={label}>
			<Box css={{ width: "100%", flexDirection: "column", display: "flex" }}>
				<Box css={{ position: "relative" }}>
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
			</Box>
		</Label>
	);
}

export { Select };
