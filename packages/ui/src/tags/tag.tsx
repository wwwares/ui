import {
	type TagProps as RACTagProps,
	Tag as RACTag,
} from "react-aria-components";
import { tagSlots, themeContract } from "@wwwares/ui-system";
import { Button } from "../button";
import { IconX } from "@tabler/icons-react";
import { styled } from "../styled";

const Box = styled("div");

function Tag(props: RACTagProps) {
	const { children, ...rest } = props;

	const textValue = typeof children === "string" ? children : undefined;

	return (
		<RACTag textValue={textValue} {...rest}>
			{({ allowsRemoving, isSelected, isFocusVisible }) => {
				const cls = tagSlots.tag({
					selected: isSelected,
					focused: isFocusVisible,
				});
				return (
					<Box
						css={{
							marginRight: allowsRemoving ? "-4px" : undefined,
						}}
						className={cls}
					>
						{typeof children !== "function" && children}
						{allowsRemoving && (
							<>
								<Box
									css={{
										borderLeft: isSelected
											? `1px solid ${themeContract.colors.stone[100]}`
											: `1px solid ${themeContract.colors.stone[500]}`,
										height: "100%",
									}}
								/>
								<Button
									variant="icon"
									slot="remove"
									style={{
										background: "none",
										padding: 0,
										height: "auto",
									}}
								>
									<IconX size="13px" display="flex" />
								</Button>
							</>
						)}
					</Box>
				);
			}}
		</RACTag>
	);
}

export { Tag, type RACTagProps as TagProps };
