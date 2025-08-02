// import {
// 	type TagProps as RACTagProps,
// 	Tag as RACTag,
// } from "react-aria-components";
// import { tagsSlotRecipe } from "@wwwares/ui-system/recipes";
// import { Button } from "../button";
// import { IconX } from "@tabler/icons-react";
// import { Box } from "@wwwares/ui-system/jsx";
// import { css } from "@wwwares/ui-system/css";

// const cls = tagsSlotRecipe().tag;

// function Tag(props: RACTagProps) {
// 	const { children, ...rest } = props;

// 	const textValue = typeof children === "string" ? children : undefined;

// 	return (
// 		<RACTag textValue={textValue} {...rest} className={cls}>
// 			{({ allowsRemoving, isSelected }) => (
// 				<Box
// 					style={{
// 						marginRight: allowsRemoving ? "-4px" : undefined,
// 						display: "flex",
// 					}}
// 				>
// 					{children}
// 					{allowsRemoving && (
// 						<Box
// 							display="flex"
// 							borderLeft={
// 								isSelected
// 									? "1px solid {colors.stone.100}"
// 									: "1px solid {colors.stone.500}"
// 							}
// 							marginLeft="2"
// 						>
// 							<Button
// 								variant="icon"
// 								slot="remove"
// 								style={{
// 									background: "none",
// 									padding: 0,
// 									border: "none",
// 									height: "auto",
// 								}}
// 							>
// 								<IconX
// 									className={css({
// 										color: isSelected ? "stone.100" : "stone.500",
// 										height: "13px",
// 									})}
// 								/>
// 							</Button>
// 						</Box>
// 					)}
// 				</Box>
// 			)}
// 		</RACTag>
// 	);
// }

// export { Tag, type RACTagProps as TagProps };
